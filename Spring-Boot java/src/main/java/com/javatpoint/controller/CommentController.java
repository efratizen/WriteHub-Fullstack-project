package com.javatpoint.controller;

import com.javatpoint.dto.CommentDTO;
import com.javatpoint.model.Chapter;
import com.javatpoint.model.Comment;
import com.javatpoint.model.Offer;
import com.javatpoint.service.CommentRepository;
import com.javatpoint.service.MapStructMapper;
import com.javatpoint.service.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private CommentRepository commentRepository;
    private OfferRepository offerRepository;
    private MapStructMapper mapper;

    @Autowired
    public CommentController(CommentRepository commentRepository
    ,OfferRepository offerRepository,MapStructMapper mapper) {
        this.commentRepository = commentRepository;
        this.offerRepository=offerRepository;
        this.mapper=mapper;
    }

    @GetMapping("/get")
    public ResponseEntity<List<Comment>> getComments(){
        try{
            List<Comment> comments=new ArrayList<>();
            commentRepository.findAll().forEach((e->comments.add(e)));
            return new ResponseEntity<>(comments, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/commentByOfferId/{offer_id}")
    public  ResponseEntity<List<Comment>> getCommentByOfferId(@PathVariable long offer_id) {
        try {

            List<Comment> comments = commentRepository.findAllByOfferId(offer_id);
            return new ResponseEntity<>(comments, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
  @GetMapping("/get/{id}")
    public ResponseEntity<Comment> getCommentId(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            return new ResponseEntity<>(e,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/postComment")
    public ResponseEntity<Comment> createComment(@RequestBody Comment c){
      try{
          Comment newComment=commentRepository.save(c);

          Offer o=offerRepository.getOne(c.getOffer().getId());
          o.setScore(o.getScore()+c.getScore());
          offerRepository.save(o);
          return new ResponseEntity<>(newComment,HttpStatus.CREATED);
      }
      catch (Exception e){
          System.out.println(e);
         return  new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/commentByOfferIdDto/{offer_id}")
    public  ResponseEntity<List<CommentDTO>> getCommentByOfferIdDto(@PathVariable long offer_id) {
        try {

            List<Comment> comments = commentRepository.findAllByOfferId(offer_id);
            return new ResponseEntity<>(mapper.commentsToDto(comments), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

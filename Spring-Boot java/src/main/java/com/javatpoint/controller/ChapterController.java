package com.javatpoint.controller;

import com.javatpoint.model.Book;
import com.javatpoint.model.Chapter;
import com.javatpoint.service.BookRepository;
import com.javatpoint.service.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/chapters")
public class ChapterController {
  private ChapterRepository chapterRepository;
  private BookRepository bookRepository;

   @Autowired
    public ChapterController(ChapterRepository chapterRepository,BookRepository bookRepository) {
        this.chapterRepository = chapterRepository;
        this.bookRepository=bookRepository;
    }

    @GetMapping("/getNumChapter/{book_id}")
    public ResponseEntity<Chapter> getNumChapter(@PathVariable long book_id){
        Chapter c=chapterRepository.findFirstByBookIdAndPresentedFalse(book_id);
        if(c!=null){
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(c,HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/get")
    public ResponseEntity<List<Chapter>>getChapters(){
       try{
           List<Chapter> chapters=new ArrayList<>();
           chapterRepository.findAll().forEach((e->chapters.add(e)));
           return new ResponseEntity<>(chapters,HttpStatus.OK);
       }
       catch(Exception e){
           return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("uploadChapter")
    public ResponseEntity addChapter(@RequestBody Chapter c) {
        try {
            Book b=bookRepository.getOne(c.getBook().getId());
            System.out.println("book---------------------------------"+b);
            if (b == null) {
                // Handle the case where the Book is null
                return new ResponseEntity<>("Book cannot be null", HttpStatus.BAD_REQUEST);
            }

            int numChapter = b.getNumChapters();
            int lenListChapter = b.getChapterList() != null ? b.getChapterList().size() : 0;
            System.out.println("num chapter--------------- "+numChapter);
            System.out.println("lem----------------------"+lenListChapter);
            if (lenListChapter < numChapter) {
                Chapter newChapter = chapterRepository.save(c);
                return new ResponseEntity<>( HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Number of chapters exceeded", HttpStatus.FORBIDDEN);
            }
        } catch (Exception e) {
            // Log the exception for debugging purposes
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/get/{id}")
    public ResponseEntity<Chapter> getChapterId(@PathVariable long id){
       Chapter c=chapterRepository.findById(id).orElse(null);
       if(c!=null){
           return new ResponseEntity<>(c,HttpStatus.OK);
       }
       else{
           return new ResponseEntity<>(c,HttpStatus.NOT_FOUND);
       }
    }


}

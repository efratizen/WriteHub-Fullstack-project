package com.javatpoint.controller;

import com.javatpoint.dto.OfferDTO;
import com.javatpoint.model.*;
import com.javatpoint.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api/offers")
public class OfferController {

    private OfferRepository offerRepository;
    private CommentRepository commentRepository ;
    private BookRepository bookRepository;
    private UserRepository userRepository;
private MapStructMapper mapper;
    @Autowired
    public OfferController(OfferRepository offerRepository,MapStructMapper mapper,CommentRepository commentRepository,BookRepository bookRepository,UserRepository userRepository) {
        this.offerRepository = offerRepository;
        this.mapper=mapper;
        this.commentRepository=commentRepository;
        this.bookRepository=bookRepository;
        this.userRepository=userRepository;

    }
//  פונקציה שמחזירה הצעה עם מקסימום דירוג
//@GetMapping("/getChapterOfMaxScore/{bookId}")
//public ResponseEntity<Offer> getChapterOfMaxScore(@PathVariable Long bookId){
//        try {
//            Offer o = offerRepository.findFirstByBookIdAndChapterPresentedIsFalseOrderByScoreDesc(bookId);
//            return new ResponseEntity<>(o, HttpStatus.OK);
//        }
//        catch (Exception e){
//            System.out.println(e);
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//}

//פונקציה שמחזירה רשימה של הצעות שיש להם את המקסימום דירוג+ רשימת מחרוזות
    @GetMapping("/getChaptersOfMaxScoreDto-step1")
    public ResponseEntity<List<OfferDTO>> getChapterOfMaxScore() {
        try {
            List<Book> books = new ArrayList<>();
            List<Offer> maxScoreOffer = new ArrayList<>();
            bookRepository.findAll().forEach(e -> books.add(e));

            for (Book book : books) {
                Long bookId = book.getId();
                Offer o = offerRepository.findFirstByBookIdAndChapterPresentedIsFalseOrderByScoreDesc(bookId);

                // Check if o is not null before adding to maxScoreOffer
                if (o != null) {
                    maxScoreOffer.add(o);
                }
            }

            return new ResponseEntity<>(mapper.offersToDto(maxScoreOffer), HttpStatus.OK);
        } catch (Exception e) {

            System.out.println(e);

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




// פונקציה שמביאה את כל הצעות + רשימת מחרוזות
    @GetMapping("/getOffersDto")
    public ResponseEntity<List<OfferDTO>> getOffersDto(){
        try{
            List<Offer> offers=new ArrayList<>();
            offerRepository.findAll().forEach((e->offers.add(e)));
            return new ResponseEntity<>(mapper.offersToDto(offers), HttpStatus.OK);
        }
        catch(Exception e){

            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // פונקציה שמביאה את הצעות הפרקים + רשימת מחרוזות
    @GetMapping("/suggestedChaptersDto/{book_id}")
    public  ResponseEntity<List<OfferDTO>> suggestedChaptersDto(@PathVariable long book_id){
        try{

            List <Offer> suggestedChapters=offerRepository.findAllByBookIdAndChapterPresentedIsFalse(book_id);
            return new ResponseEntity<>(mapper.offersToDto(suggestedChapters), HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


//
//    @GetMapping("/bookChapters/{book_id}")
//    public  ResponseEntity<List<Offer>> getBookChapters(@PathVariable long book_id){
//        try{
//
//            List <Offer> bookChapters=offerRepository.findAllByBookIdAndChapterPresentedIsTrue(book_id);
//            return new ResponseEntity<>(bookChapters, HttpStatus.OK);
//        }
//        catch(Exception e){
//            System.out.println(e);
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    //פונקציה שמביאה את הפרקים של הספר לפי  id  של הספר + רשימת מחרוזות
    @GetMapping("/bookChaptersDto/{book_id}")
    public  ResponseEntity<List<OfferDTO>> getBookChapters(@PathVariable long book_id){
        try{

            List <Offer> bookChapters=offerRepository.findAllByBookIdAndChapterPresentedIsTrue(book_id);
            return new ResponseEntity<>(mapper.offersToDto(bookChapters), HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    פונקציה שמביאה את כל ההצעות לפי id של ההצעה  + רשימת מחרוזות
    @GetMapping("/getdto/{id}")
    public ResponseEntity<OfferDTO> getDTO(@PathVariable long id){
        Offer o=offerRepository.findById(id).orElse(null);
        if(o!=null){
            return new ResponseEntity<>(mapper.offerToDto(o),HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }



//    פונקציה שמעלה הצעה והופכת את מחרוזת הטקסט הארוך לרשימת מחרוזות
    @PostMapping("/uploadOfferDto")
    public ResponseEntity<Offer> createOffer(@RequestBody OfferDTO o){
        try{
            Offer newOffer=offerRepository.save(mapper.DtoToOffer(o));
            return new ResponseEntity<>(newOffer,HttpStatus.CREATED);
        }
        catch (Exception e){
            return  new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Transactional
    @DeleteMapping("/deleteOffersByBookId-step2/{bookId}/{offerId}")
    public ResponseEntity deleteOffersByBookId(@PathVariable Long bookId, @PathVariable Long offerId) {
        try {
            Offer o = offerRepository.getOne(offerId);
            Chapter c = o.getChapter();
            commentRepository.deleteAllByOfferChapterId(c.getId());
            offerRepository.deleteAllByBookIdAndChapterPresentedFalseAndIdNot(bookId, offerId);
            c.setPresented(true);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return  new ResponseEntity(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
   }

    @Transactional
    @DeleteMapping("/deleteOffers-step2")
    public ResponseEntity<Void> deleteOffers(@RequestBody List<OfferDTO> offersDto) {
        try {
            List<Offer> offers = mapper.DtoToOffers(offersDto);

            for (Offer offer : offers) {
                Long offerId = offer.getId();
                Book book = offer.getBook();
                Offer o = offerRepository.getOne(offerId);
                Chapter c = o.getChapter();
                User user=o.getUser();
                user.setIsAuthor(1);
                userRepository.save(user);
                commentRepository.deleteAllByOfferChapterId(c.getId());
                offerRepository.deleteAllByBookIdAndChapterPresentedFalseAndIdNot(book.getId(), offerId);
                c.setPresented(true);
                if(book.getCurrentChapter()<book.getNumChapters())
                   book.setCurrentChapter(book.getCurrentChapter()+1);
                bookRepository.save(book);
            }

            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }









//   id פונקציה שמביאה את כל ההצעות לפי
//    @GetMapping("/get/{id}")
//    public ResponseEntity<Offer> getOfferId(@PathVariable long id){
//        Offer e=offerRepository.findById(id).orElse(null);
//        if(e!=null){
//            return new ResponseEntity<>(e,HttpStatus.OK);
//        }
//        else{
//            return new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
//        }
//    }

//פונקציה שמעלה הצעה
//    @PostMapping("/postOffer")
//    public ResponseEntity<Offer> createOffer(@RequestBody Offer o){
//        try{
//            Offer newOffer=offerRepository.save(o);
//            return new ResponseEntity<>(newOffer,HttpStatus.CREATED);
//        }
//        catch (Exception e){
//            return  new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    //פונקציה שמביאה את כל ההצעות
//    @GetMapping("/get")
//    public ResponseEntity<List<Offer>> getOffers(){
//        try{
//            List<Offer> offers=new ArrayList<>();
//            offerRepository.findAll().forEach((e->offers.add(e)));
//            return new ResponseEntity<>(offers, HttpStatus.OK);
//        }
//        catch(Exception e){
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    //פונקציה שמביאה את הצעות הפרקים
//    @GetMapping("/suggestedChapters/{book_id}")
//    public  ResponseEntity<List<Offer>> getSuggestedChapters(@PathVariable long book_id){
//        try{
//
//            List <Offer> suggestedChapters=offerRepository.findAllByBookIdAndChapterPresentedIsFalse(book_id);
//            return new ResponseEntity<>(suggestedChapters, HttpStatus.OK);
//        }
//        catch(Exception e){
//            System.out.println(e);
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}

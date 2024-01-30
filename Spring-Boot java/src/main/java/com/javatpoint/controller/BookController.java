package com.javatpoint.controller;

import com.javatpoint.dto.BookDTO;
import com.javatpoint.dto.UserDTO;
import com.javatpoint.model.Book;
import com.javatpoint.model.Chapter;
import com.javatpoint.model.User;
import com.javatpoint.service.BookRepository;
import com.javatpoint.service.ChapterRepository;
import com.javatpoint.service.MapStructMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*") // Use http instead of https
@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookRepository bookRepository;
    private MapStructMapper mapper;
    private ChapterRepository chapterRepository;

    private static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "\\images\\";

    @Autowired
    public BookController(BookRepository bookRepository, MapStructMapper mapper,ChapterRepository chapterRepository) {
        this.bookRepository = bookRepository;
        this.mapper = mapper;
        this.chapterRepository=chapterRepository;

    }


    //   העלאת פרטי ספר פלוס תמונה לכריכה
    @PostMapping("/uploadBook")
    public ResponseEntity<Book> uploadBookWithImage(@RequestPart("image") MultipartFile file,
                                                    @RequestPart("book") Book b) {
        try {


            String filePath = UPLOAD_DIRECTORY + file.getOriginalFilename();
            Path filename = Paths.get(filePath);
            Files.write(filename, file.getBytes());
            b.setImage(filePath);
            Book newBook = bookRepository.save(b);

            int numChapters=b.getNumChapters();
            for (int i = 0; i < numChapters; i++) {
             Chapter c=new Chapter();
             c.setBook(newBook);
             c.setPresented(false);
             c.setNumChapter(i+1);
             Chapter newChapter=chapterRepository.save(c);

            }
            return new ResponseEntity<>(newBook, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
//    פונקציה שמביאה את כל הספרים בלי תמונת כריכה
    @GetMapping("/get")
    public ResponseEntity<List<Book>> getBooks() {
        try {
            List<Book> books = new ArrayList<>();
//            bookRepository.findAll().forEach((e -> books.add(e)));
            books=bookRepository.findAllByOrderByStartTimeDesc();
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //פונקציה שמביאה את כל הספרים + תמונת כריכה
    @GetMapping("/getAllBooksDto")
    public ResponseEntity<List<BookDTO>> getAllBooksDto() {
        try {
            List<Book> books =new ArrayList<>();
           books=bookRepository.findAllByOrderByStartTimeDesc();
           return new ResponseEntity<>(mapper.booksToDto(books), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
          return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

// פונקציה שמביאה ספר לפי id + תמונת כריכה
    @GetMapping("/getBookDto/{id}")
    public ResponseEntity<BookDTO> getBookDto(@PathVariable Long id) throws IOException {
        Book b = bookRepository.findById(id).orElse(null);
        if (b != null) {
            return new ResponseEntity<>(mapper.bookToDto(b), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//פונקציה שמביאה ספר לפי id בלי תמונת כריכה
//    @GetMapping("/get/{id}")
//    public ResponseEntity<Book> getBookId(@PathVariable long id) {
//        Book e = bookRepository.findById(id).orElse(null);
//        if (e != null) {
//            return new ResponseEntity<>(e, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(e, HttpStatus.NOT_FOUND);
//        }
//}
    }







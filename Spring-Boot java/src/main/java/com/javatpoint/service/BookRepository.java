package com.javatpoint.service;

import com.javatpoint.dto.BookDTO;
import com.javatpoint.model.Book;
import com.javatpoint.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public interface BookRepository extends JpaRepository<Book,Long> {
    List<Book> findAllByOrderByStartTimeDesc();
}

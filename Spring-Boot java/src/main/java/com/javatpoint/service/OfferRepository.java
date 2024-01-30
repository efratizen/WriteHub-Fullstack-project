package com.javatpoint.service;

import com.javatpoint.model.Book;
import com.javatpoint.model.Offer;
import com.javatpoint.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface OfferRepository extends JpaRepository<Offer,Long> {



    List <Offer> findAllByBookIdAndChapterPresentedIsFalse(long book_id);
    List <Offer> findAllByBookIdAndChapterPresentedIsTrue(long book_id);
    Offer findFirstByBookIdAndChapterPresentedIsFalseOrderByScoreDesc(long bookId);

    void deleteAllByBookIdAndChapterPresentedFalseAndIdNot(long bookId, long id);


}

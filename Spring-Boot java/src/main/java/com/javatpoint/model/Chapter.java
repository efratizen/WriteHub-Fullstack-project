package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JsonIgnore
    @ManyToOne//להרבה פרקים יש ספר אחד
    @JoinColumn(name="book_id")
    private Book book;

    private int numChapter;
    @JsonIgnore
    @OneToMany(mappedBy="chapter")//לכל פרק יש הרבה הצעות
    private List<Offer> offerList;
    private boolean presented;

//    public Chapter(Long id, Book book, List<Offer> offerList, boolean isPresented) {
//        this.id = id;
//        this.book = book;
//        this.offerList = offerList;
//        this.isPresented = isPresented;
//    }


    public int getNumChapter() {
        return numChapter;
    }

    public void setNumChapter(int numChapter) {
        this.numChapter = numChapter;
    }

    public Chapter(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public List<Offer> getOfferList() {
        return offerList;
    }

    public void setOfferList(List<Offer> offerList) {
        this.offerList = offerList;
    }

    public boolean isPresented() {
        return presented;
    }

    public void setPresented(boolean presented) {
        this.presented = presented;
    }
}

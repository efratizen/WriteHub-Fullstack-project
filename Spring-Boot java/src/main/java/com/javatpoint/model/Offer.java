package com.javatpoint.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int score;


    private LocalDate dateUpload;


    @OneToMany(mappedBy="offer",cascade = CascadeType.ALL)//לכל הצעה יש הרבה שורות תוכן
    private List<Content> contentList;

    @OneToMany(mappedBy="offer" ,cascade = CascadeType.ALL)//לכל הצעה יש הרבה תגובות
    private List<Comment> commentList;


    @ManyToOne
    @JoinColumn(name="num_chapter")
    private Chapter chapter;


    @ManyToOne//׳”׳¨׳‘׳” ׳”׳¦׳¢׳•׳× ׳׳׳©׳×׳׳© ׳׳—׳“
    @JoinColumn(name="user_id")
    private User user;


    @ManyToOne//׳”׳¨׳‘׳” ׳”׳¦׳¢׳•׳× ׳׳¡׳₪׳¨ ׳׳—׳“
    @JoinColumn(name="book_id")
    private Book book;

//    public Offer(Long id, int score, LocalDate dateUpload, List<Comment> commentList, Chapter chapter, User user, Book book) {
//        this.id = id;
//        this.score = score;
//        this.dateUpload = dateUpload;
//        this.commentList = commentList;
//        this.chapter = chapter;
//        this.user = user;
//        this.book = book;
//    }


    public Offer(Long id, int score, LocalDate dateUpload, List<Content> contentList, List<Comment> commentList, Chapter chapter, User user, Book book) {
        this.id = id;
        this.score = score;
        this.dateUpload = dateUpload;
        this.contentList = contentList;
        this.commentList = commentList;
        this.chapter = chapter;
        this.user = user;
        this.book = book;
    }

    public Offer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public LocalDate getDateUpload() {
        return dateUpload;
    }

    public void setDateUpload(LocalDate dateUpload) {
        this.dateUpload = dateUpload;
    }

    public List<Content> getContentList() {
        return contentList;
    }

    public void setContentList(List<Content> contentList) {
        this.contentList = contentList;
    }
}
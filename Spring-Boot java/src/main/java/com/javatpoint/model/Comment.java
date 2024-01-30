package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;//


    private LocalDate date;
    private String content;
    private int score;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne//להרבה תגובות יש הצעה אחת
    @JoinColumn(name="offer_id")
    private Offer offer;


    @ManyToOne//להרבה תגובות יש משתמש אחד
    @JoinColumn(name="user_id")
    private User user;

    public Comment(Long id, LocalDate date, String content, int score, Offer offer, User user) {
        this.id = id;
        this.date = date;
        this.content = content;
        this.score = score;
        this.offer = offer;
        this.user = user;
    }

    public Comment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Offer getOffer() {
        return offer;
    }

    public void setOffer(Offer offer) {
        this.offer = offer;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

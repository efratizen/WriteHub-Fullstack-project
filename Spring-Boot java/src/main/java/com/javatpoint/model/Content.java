package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    private  String text;
    private long numRow;


    @JsonIgnore
    @ManyToOne//
    @JoinColumn(name="offer_id")//הרבה שורות להצעה אחת
    private Offer offer;

    public Content(long id, String text, long numRow, Offer offer) {
        this.id = id;
        this.text = text;
        this.numRow = numRow;
        this.offer = offer;
    }

    public long getNumRow() {
        return numRow;
    }

    public void setNumRow(long numRow) {
        this.numRow = numRow;
    }

    public Content() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Offer getOffer() {
        return offer;
    }

    public void setOffer(Offer offer) {
        this.offer = offer;
    }
}

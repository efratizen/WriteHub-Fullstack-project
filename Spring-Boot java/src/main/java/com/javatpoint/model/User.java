package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mail;
    private String passward;
    private String firstName;
    private String lastName;
    private String literaryName;
    private String profile;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private int status;//??????
    private int isAuthor;


    @JsonIgnore
    @OneToMany(mappedBy="user")//׳׳›׳ ׳׳©׳×׳׳© ׳™׳© ׳”׳¨׳‘׳” ׳×׳’׳•׳‘׳•׳×
    private List<Comment> commentList;

    @JsonIgnore
    @OneToMany(mappedBy="user")//׳׳›׳ ׳׳©׳×׳׳© ׳™׳© ׳”׳¨׳‘׳” ׳”׳¦׳¢׳•׳×
    private List<Offer> offerList;

    public User(Long id, String mail, String passward, String firstName, String lastName, String literaryName, String profile, String phoneNumber, LocalDate dateOfBirth, int status, int isAuthor, List<Comment> commentList, List<Offer> offerList) {
        this.id = id;
        this.mail = mail;
        this.passward = passward;
        this.firstName = firstName;
        this.lastName = lastName;
        this.literaryName = literaryName;
        this.profile = profile;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;

    }

    public int getIsAuthor() {
        return isAuthor;
    }

    public void setIsAuthor(int isAuthor) {
        this.isAuthor = isAuthor;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassward() {
        return passward;
    }

    public void setPassward(String passward) {
        this.passward = passward;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLiteraryName() {
        return literaryName;
    }

    public void setLiteraryName(String literaryName) {
        this.literaryName = literaryName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    public List<Offer> getOfferList() {
        return offerList;
    }

    public void setOfferList(List<Offer> offerList) {
        this.offerList = offerList;
    }
}


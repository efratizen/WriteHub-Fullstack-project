package com.javatpoint.service;

import com.javatpoint.dto.BookDTO;
import com.javatpoint.dto.CommentDTO;
import com.javatpoint.dto.OfferDTO;
import com.javatpoint.dto.UserDTO;
import com.javatpoint.model.*;
import org.mapstruct.Mapper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MapStructMapper {
    List<BookDTO> booksToDto(List<Book> books);
    List<UserDTO> usersToDto(List<User> users);
    List<OfferDTO> offersToDto(List<Offer> offers);
    List<Offer> DtoToOffers (List<OfferDTO> offers);
    List<CommentDTO>  commentsToDto(List<Comment> comments);

    default UserDTO userToDto(User u) throws IOException {
        UserDTO userDto=new UserDTO();

        userDto.setId(u.getId());
        userDto.setMail(u.getMail());
        userDto.setPassward(u.getPassward());
        userDto.setFirstName(u.getFirstName());
        userDto.setLastName(u.getLastName());
        userDto.setLiteraryName(u.getLiteraryName());
        userDto.setPhoneNumber(u.getPhoneNumber());
        userDto.setDateOfBirth(u.getDateOfBirth());
        userDto.setStatus(u.getStatus());
        userDto.setIsAuthor(u.getIsAuthor());
        userDto.setCommentList(u.getCommentList());
        userDto.setOfferList(u.getOfferList());

        Path filename= Paths.get(u.getProfile());
         //הופך את התמונה למערך של ביטים
        byte[]byteImage=Files.readAllBytes(filename);
        userDto.setProfile(Base64.getEncoder().encodeToString(byteImage));


        return userDto;
 }

default BookDTO bookToDto (Book b) throws IOException {
    BookDTO bookDto=new BookDTO();
    bookDto.setId(b.getId());
    bookDto.setName(b.getName());
    bookDto.setDescription(b.getDescription());
    bookDto.setStartTime(b.getStartTime());
    bookDto.setEndTime(b.getEndTime());
    bookDto.setNumChapters(b.getNumChapters());
    bookDto.setOfferList(b.getOfferList());
    bookDto.setChapterList(b.getChapterList());
    bookDto.setCurrentChapter(b.getCurrentChapter());


    Path filename= Paths.get(b.getImage());
    //הופך את התמונה למערך של ביטים
    byte[]byteImage=Files.readAllBytes(filename);
    bookDto.setImage(Base64.getEncoder().encodeToString(byteImage));


    return bookDto;

}

default OfferDTO offerToDto(Offer o){
    OfferDTO offerDto=new OfferDTO();
    offerDto.setId(o.getId());
    offerDto.setScore(o.getScore());
    offerDto.setDateUpload(o.getDateUpload());
    offerDto.setCommentList(o.getCommentList());
    offerDto.setChapter(o.getChapter());
    offerDto.setUser(o.getUser());
    offerDto.setBook(o.getBook());

   List<Content> list=o.getContentList();
   List<String> listString=new ArrayList<>();
    for (int i = 0; i < list.size(); i++) {
        listString.add(list.get(i).getText());
    }

    offerDto.setContentList(listString);


    return offerDto;

}


default CommentDTO commentToDto(Comment c) throws IOException {
    CommentDTO commentDTO=new CommentDTO();
    commentDTO.setId(c.getId());
    commentDTO.setDate(c.getDate());
    commentDTO.setContent(c.getContent());
  commentDTO.setScore(c.getScore());
  commentDTO.setOffer(c.getOffer());
    commentDTO.setUser(userToDto(c.getUser()));
 return commentDTO;
}

default Offer DtoToOffer(OfferDTO oDto){
        Offer offer =new Offer();
    offer.setId(oDto.getId());
    offer.setScore(oDto.getScore());
    offer.setDateUpload(oDto.getDateUpload());
    offer.setCommentList(oDto.getCommentList());
    offer.setChapter(oDto.getChapter());
    offer.setUser(oDto.getUser());
    offer.setBook(oDto.getBook());

    List<Content> list=new ArrayList<>();
    List<String> listString=oDto.getContentList();
    for (int i = 0; i <listString.size() ; i++) {
        list.add(new Content(0,listString.get(i),i,offer));
    }
    offer.setContentList(list);
    return offer;

}

    default Comment dtoToComment(CommentDTO c) throws IOException {
        Comment comment=new Comment();
        comment.setId(c.getId());
        comment.setDate(c.getDate());
comment.setContent(c.getContent());
comment.setScore(c.getScore());
 comment.setOffer(c.getOffer());
        comment.setUser(dtoToUser(c.getUser()));

        return comment;
    }

    default User dtoToUser(UserDTO u) {


        User user=new User();
        user.setId(u.getId());
        user.setPassward(u.getPassward());
        user.setMail(u.getMail());
        user.setProfile(u.getProfile());
        user.setFirstName(u.getFirstName());
        user.setLastName(u.getLastName());
        user.setLiteraryName(u.getLiteraryName());
        user.setProfile(u.getProfile());
        user.setPhoneNumber(u.getPhoneNumber());
        user.setDateOfBirth(u.getDateOfBirth());
        user.setStatus(u.getStatus());
        user.setIsAuthor(u.getIsAuthor());
        user.setCommentList(u.getCommentList());
        user.setOfferList(u.getOfferList());
        return user;

    }

}

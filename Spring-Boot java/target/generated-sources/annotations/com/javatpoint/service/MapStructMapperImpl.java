package com.javatpoint.service;

import com.javatpoint.dto.BookDTO;
import com.javatpoint.dto.CommentDTO;
import com.javatpoint.dto.OfferDTO;
import com.javatpoint.dto.UserDTO;
import com.javatpoint.model.Book;
import com.javatpoint.model.Comment;
import com.javatpoint.model.Offer;
import com.javatpoint.model.User;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-30T23:23:47+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_111 (Oracle Corporation)"
)
@Component
public class MapStructMapperImpl implements MapStructMapper {

    @Override
    public List<BookDTO> booksToDto(List<Book> books) {
        if ( books == null ) {
            return null;
        }

        List<BookDTO> list = new ArrayList<BookDTO>( books.size() );
        for ( Book book : books ) {
            try {
                list.add( bookToDto( book ) );
            }
            catch ( IOException e ) {
                throw new RuntimeException( e );
            }
        }

        return list;
    }

    @Override
    public List<UserDTO> usersToDto(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserDTO> list = new ArrayList<UserDTO>( users.size() );
        for ( User user : users ) {
            try {
                list.add( userToDto( user ) );
            }
            catch ( IOException e ) {
                throw new RuntimeException( e );
            }
        }

        return list;
    }

    @Override
    public List<OfferDTO> offersToDto(List<Offer> offers) {
        if ( offers == null ) {
            return null;
        }

        List<OfferDTO> list = new ArrayList<OfferDTO>( offers.size() );
        for ( Offer offer : offers ) {
            list.add( offerToDto( offer ) );
        }

        return list;
    }

    @Override
    public List<Offer> DtoToOffers(List<OfferDTO> offers) {
        if ( offers == null ) {
            return null;
        }

        List<Offer> list = new ArrayList<Offer>( offers.size() );
        for ( OfferDTO offerDTO : offers ) {
            list.add( DtoToOffer( offerDTO ) );
        }

        return list;
    }

    @Override
    public List<CommentDTO> commentsToDto(List<Comment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<CommentDTO> list = new ArrayList<CommentDTO>( comments.size() );
        for ( Comment comment : comments ) {
            try {
                list.add( commentToDto( comment ) );
            }
            catch ( IOException e ) {
                throw new RuntimeException( e );
            }
        }

        return list;
    }
}

package com.javatpoint.service;

import com.javatpoint.model.Chapter;
import com.javatpoint.model.Offer;
import com.javatpoint.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserRepository extends JpaRepository<User,Long> {



      List <User> findAllByIsAuthorEquals(int num);
      User findUserByMail(String mail);

}

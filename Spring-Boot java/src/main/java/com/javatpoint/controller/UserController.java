package com.javatpoint.controller;

import com.javatpoint.dto.BookDTO;
import com.javatpoint.dto.UserDTO;
import com.javatpoint.model.Book;
import com.javatpoint.model.Comment;
import com.javatpoint.model.User;
import com.javatpoint.service.MapStructMapper;
import com.javatpoint.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserRepository userRepository;
    private MapStructMapper mapper;

    private static String UPLOAD_DIRECTORY=System.getProperty("user.dir") +"\\images\\";

    @Autowired
    public UserController(UserRepository userRepository,MapStructMapper mapper) {
        this.userRepository = userRepository;
        this.mapper=mapper;
    }
//פונקציה שמביאה את כל המשתמשים בלי תמונת פרופיל
    @GetMapping("/get")
    public ResponseEntity<List<User>> getUsers(){
        try{
            List<User> users=new ArrayList<>();
            userRepository.findAll().forEach((e->users.add(e)));
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    פונקציה שמביאה את כל המשתשמשים + תמונת פרופיל
    @GetMapping("/getAllUsersDto")
    public ResponseEntity<List<UserDTO>> getAllUsersDto() {
        try {
            List<User> users =new ArrayList<>();
            userRepository.findAll().forEach((e->users.add(e)));
            return new ResponseEntity<>(mapper.usersToDto(users), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //פונקציה שמביאה את כל הסופרים בלי תמונה - משתמשים שההצעות שלהם נכנסו לספרים
//    @GetMapping("/getAuthors")
//    public ResponseEntity<List<User>> getAuthors() {
//        try {
//            List<User> authors = userRepository.findAllByIsAuthorEquals(1);
//            return new ResponseEntity<>(authors, HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
    @GetMapping("/getAuthorsDto")
    public  ResponseEntity<List<UserDTO>> getAuthorsDto(){
        try{
            List<User> authors=userRepository.findAllByIsAuthorEquals(1);
            return new ResponseEntity<>(mapper.usersToDto(authors),HttpStatus.OK);
        }
        catch (Exception e){
            return  new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



//   העלאת פרטי משתמש + תמונה
    @PostMapping("/uploadUser")
    public ResponseEntity <User> uploadUserWithPropfile(@RequestPart ("profile")MultipartFile file,
                                                 @RequestPart ("user")User u)
    {
        try {
            String filePath=UPLOAD_DIRECTORY + file.getOriginalFilename();
            Path filename = Paths.get(filePath);
            Files.write(filename, file.getBytes());
            u.setProfile(filePath);
            User newUser = userRepository.save(u);
            return new ResponseEntity(newUser,HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("signIn/{mail}/{password}")
    public ResponseEntity<UserDTO> signIn(@PathVariable String mail,@PathVariable String password) throws IOException {
        // 404 - User not found in the server
        // 206 - Mail found but password doesn't match
        // 200 - Successful login
        User u = userRepository.findUserByMail(mail);

        if (u == null) {
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }

        // Use equals method for string comparison
        if (!u.getPassward().equals(password)) {
            return new ResponseEntity<>( HttpStatus.PARTIAL_CONTENT);
        }


        return new ResponseEntity<>(mapper.userToDto(u), HttpStatus.OK);
    }


    @PostMapping("signUp")
    public ResponseEntity<UserDTO> signUp(@RequestPart ("profile")MultipartFile file,
                                       @RequestPart ("user")User user ){
//        have a user
//        sign up-add a user
        User u=userRepository.findUserByMail(user.getMail());
        if(u!=null){
            return  new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        try {
            String filePath=UPLOAD_DIRECTORY + file.getOriginalFilename();
            Path filename = Paths.get(filePath);
            Files.write(filename, file.getBytes());
            user.setProfile(filePath);
            User newUser = userRepository.save(user);
            return new ResponseEntity(mapper.userToDto(newUser),HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
 }




    //פונקציה שמביאה משתמש לפי id + תמונת פרופיל
    @GetMapping("/getUserDto/{id}")
    public ResponseEntity<UserDTO> getUserDto(@PathVariable Long id) throws IOException {
        User u=userRepository.findById(id).orElse(null);
        if(u!=null){
            return new ResponseEntity<>(mapper.userToDto(u),HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }




//    פונקציה שמביאה משתמש לפי id בלי תמונת פרופיל

//    @GetMapping("/get/{id}")
//    public ResponseEntity<User> getUserId(@PathVariable long id){
//        User e=userRepository.findById(id).orElse(null);
//        if(e!=null){
//            return new ResponseEntity<>(e,HttpStatus.OK);
//        }
//        else{
//            return new ResponseEntity<>(e,HttpStatus.NOT_FOUND);
//        }
//    }





}

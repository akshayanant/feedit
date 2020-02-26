package com.heiseneberg.feedit.service;

import com.heiseneberg.feedit.dao.UsersRepository;
import com.heiseneberg.feedit.models.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Akshay Hegde on 2/25/2020.
 */
@Service
public class UsersService {
    @Autowired
    UsersRepository usersRepository;

    public void createUser(UserDetails userDetails){
        usersRepository.save(userDetails);
    }

    public List<UserDetails> getUsers(){
        return (List<UserDetails>) usersRepository.findAll();
    }

}

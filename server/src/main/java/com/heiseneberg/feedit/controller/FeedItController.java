package com.heiseneberg.feedit.controller;

import com.heiseneberg.feedit.models.FeedPost;
import com.heiseneberg.feedit.models.PostDetails;
import com.heiseneberg.feedit.models.UserDetails;
import com.heiseneberg.feedit.resources.JSONConverter;
import com.heiseneberg.feedit.resources.Store;
import com.heiseneberg.feedit.service.FeedService;
import com.heiseneberg.feedit.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Akshay Hegde on 2/18/2020.
 */

@RestController
@RequestMapping(path= Store.HOME_EXT)
@CrossOrigin(origins="*")
public class FeedItController {
    @Autowired
    private FeedService feedService;
    @Autowired
    private UsersService usersService;

    @GetMapping
    public String home(){
        return refresh();
    }

    @GetMapping(path = "/refresh")
    public String refresh(){
        List<FeedPost> posts = feedService.getPosts();
        List<UserDetails> users = usersService.getUsers();
        List<PostDetails> postDetails = new ArrayList<>();
        for(FeedPost post:posts){
            String email = post.getOwnerID();
            for(UserDetails user:users){
                if(user.getEmail().equals(email)){
                    postDetails.add(new PostDetails(
                            user.getFirstName() + " "+user.getLastName(),
                            post.getTimestamp(),post.getPost()));
                    break;
                }
            }
        }
        return JSONConverter.toJSON(postDetails);
    }

    @PostMapping(path = "/makepost")
    public String makePost(@RequestBody FeedPost feedPost){
        feedService.makePost(feedPost);
        return refresh();
    }

    @PostMapping(path =Store.CREATE_UESR_EXT)
    public void createUser(@RequestBody UserDetails userDetails){
        usersService.createUser(userDetails);
    }
}

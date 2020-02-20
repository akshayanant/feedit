package com.heiseneberg.feedit.controller;

import com.heiseneberg.feedit.models.FeedPost;
import com.heiseneberg.feedit.resources.Store;
import com.heiseneberg.feedit.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Akshay Hegde on 2/18/2020.
 */

@RestController
@RequestMapping(path= Store.HOME_EXT)
@CrossOrigin(origins="*")
public class FeedItController {
    @Autowired
    private     FeedService feedService;

    @GetMapping
    public List<FeedPost> home(){
        return feedService.getPosts();
    }

    @GetMapping(path = "/refresh")
    public List<FeedPost> refresh(){
        return feedService.getPosts();
    }

    @PostMapping(path = "/makepost")
    public List<FeedPost> makePost(@RequestBody FeedPost feedPost){
        return feedService.makePost(feedPost);
    }
}

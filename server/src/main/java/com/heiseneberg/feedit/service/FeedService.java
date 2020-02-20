package com.heiseneberg.feedit.service;

import com.heiseneberg.feedit.dao.FeedsRepository;
import com.heiseneberg.feedit.models.FeedPost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Akshay Hegde on 2/18/2020.
 */

@Service
public class FeedService {
    @Autowired
    private FeedsRepository feedsRepository;

    public List<FeedPost> makePost(FeedPost feedPost){
        feedsRepository.save(feedPost);
        return (List<FeedPost>) feedsRepository.findAll();
    }

    public List<FeedPost> getPosts(){
        return (List<FeedPost>) feedsRepository.findAll();
    }
}

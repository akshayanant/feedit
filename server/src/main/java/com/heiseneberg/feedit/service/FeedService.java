package com.heiseneberg.feedit.service;

import com.heiseneberg.feedit.dao.FeedsRepository;
import com.heiseneberg.feedit.models.BaseFeedPost;
import com.heiseneberg.feedit.models.FeedPost;
import com.heiseneberg.feedit.models.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * Created by Akshay Hegde on 2/18/2020.
 */

@Service
public class FeedService {
    @Autowired
    private FeedsRepository feedsRepository;

    public void makePost(FeedPost feedPost){
        feedsRepository.save(feedPost);
    }

    public List<FeedPost> getPosts(){
        List<FeedPost> posts =  (List<FeedPost>) feedsRepository.findAll();
        sortNewestToOldest(posts);
        return posts;
    }

    private void sortNewestToOldest(List<FeedPost> posts){
        posts.sort(new Comparator<FeedPost>() {
            @Override
            public int compare(FeedPost o1, FeedPost o2) {
                return o2.getTimestamp().compareTo(o1.getTimestamp());
            }
        });
    }
}

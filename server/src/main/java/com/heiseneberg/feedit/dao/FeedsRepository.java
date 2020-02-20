package com.heiseneberg.feedit.dao;

import com.heiseneberg.feedit.models.FeedPost;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Akshay Hegde on 2/18/2020.
 */
public interface FeedsRepository extends CrudRepository<FeedPost,Integer> {
}

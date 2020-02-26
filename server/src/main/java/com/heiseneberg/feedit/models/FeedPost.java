package com.heiseneberg.feedit.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Akshay Hegde on 2/18/2020.
 */
@Entity
@Table(name="feeds")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeedPost extends BaseFeedPost {
    @Id
    @GeneratedValue
    private int postID;
    private String post;
    private String ownerID;

    public String getOwnerID() {
        return ownerID;
    }

    public String getPost() {
        return post;
    }
}

package com.heiseneberg.feedit.models;

import lombok.Getter;

import javax.persistence.Entity;
import java.time.LocalDateTime;

/**
 * Created by Akshay Hegde on 2/25/2020.
 */
public class PostDetails {
    private String fullName;
    private LocalDateTime time;
    private String post;

    public String getFullName() {
        return fullName;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public String getPost() {
        return post;
    }

    public PostDetails(String fullName, LocalDateTime time, String post) {
        this.fullName = fullName;
        this.time = time;
        this.post = post;

    }
}

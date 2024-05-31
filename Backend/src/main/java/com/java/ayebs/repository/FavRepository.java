package com.java.ayebs.repository;

import com.java.ayebs.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavRepository extends JpaRepository<Favorite, Long> {
    List<Favorite> findByUsername(String username);
}

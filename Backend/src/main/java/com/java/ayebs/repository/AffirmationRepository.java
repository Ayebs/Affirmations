package com.java.ayebs.repository;

import com.java.ayebs.model.Affirmation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AffirmationRepository extends JpaRepository<Affirmation, Long> {
}

package com.javatpoint.service;

import com.javatpoint.model.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface ChapterRepository extends JpaRepository<Chapter,Long> {
Chapter findFirstByBookIdAndPresentedFalse(Long bookId);
}

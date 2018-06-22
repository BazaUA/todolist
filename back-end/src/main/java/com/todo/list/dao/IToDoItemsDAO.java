package com.todo.list.dao;

import com.todo.list.entities.ToDoItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IToDoItemsDAO extends JpaRepository<ToDoItemEntity,Long> {

}

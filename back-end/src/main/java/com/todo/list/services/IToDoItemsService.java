package com.todo.list.services;

import com.todo.list.entities.ToDoItemEntity;

import java.util.List;

public interface IToDoItemsService {
    List<ToDoItemEntity> getAllItems();

    ToDoItemEntity getItemById(long itemId);

    ToDoItemEntity addItem(ToDoItemEntity item);

    void deleteItem(long itemId);

    ToDoItemEntity updateItem(ToDoItemEntity updatedEntity);

//    boolean incrementItemCount(long itemId);
//
//    boolean decrementItemCount(long itemId);
}

package com.todo.list.services;

import com.todo.list.entities.ToDoItemEntity;

import java.util.List;

public interface IToDoItemsService {
    List<ToDoItemEntity> getAllItems();

    ToDoItemEntity getItemById(long itemId);

    ToDoItemEntity addItem(ToDoItemEntity item);

    boolean deleteItem(long itemId);

    ToDoItemEntity updateItem(ToDoItemEntity updatedEntity);

    boolean setItemDone(long itemId);

    boolean setItemUndone(long itemId);

//    boolean incrementItemCount(long itemId);
//
//    boolean decrementItemCount(long itemId);
}

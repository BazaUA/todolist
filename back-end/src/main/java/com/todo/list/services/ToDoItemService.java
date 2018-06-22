package com.todo.list.services;

import com.todo.list.dao.IToDoItemsDAO;
import com.todo.list.dao.IToDoItemsDAOCustom;
import com.todo.list.entities.ToDoItemEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoItemService implements IToDoItemsService {
    @Autowired
    IToDoItemsDAO toDoItemsDAO;
    @Autowired
    IToDoItemsDAOCustom toDoItemsDAOCustom;

    @Override
    public List<ToDoItemEntity> getAllItems() {
        return toDoItemsDAO.findAll();
    }

    @Override
    public ToDoItemEntity getItemById(long itemId) {
        Optional<ToDoItemEntity> res = toDoItemsDAO.findById(itemId);
        return res.isPresent() ? res.get() : null;
    }

    @Override
    public ToDoItemEntity addItem(ToDoItemEntity item) {
        return toDoItemsDAO.save(item);
    }

    @Override
    public void deleteItem(long itemId) {
        if(toDoItemsDAO.existsById(itemId)){
            toDoItemsDAO.deleteById(itemId);
        }
    }

    @Override
    public ToDoItemEntity updateItem(ToDoItemEntity updatedEntity) {
        return toDoItemsDAO.save(updatedEntity);
    }

    @Override
    public void incrementItemCount(long itemId) {
        toDoItemsDAOCustom.incrementCount(itemId);
    }

    @Override
    public void decrementItemCount(long itemId) {
        toDoItemsDAOCustom.decrementCount(itemId);
    }
}

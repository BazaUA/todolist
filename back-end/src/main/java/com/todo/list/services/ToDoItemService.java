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
        if (isNameValid(item.getName())) {
            return toDoItemsDAO.save(item);
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteItem(long itemId) {
        if (toDoItemsDAO.existsById(itemId)) {
            toDoItemsDAO.deleteById(itemId);
            return true;
        }else{
            return false;
        }
    }

    @Override
    public ToDoItemEntity updateItem(ToDoItemEntity updatedEntity) {
        long id = updatedEntity.getId();
        if (isNameValid(updatedEntity.getName()) && toDoItemsDAO.existsById(id)) {
            return toDoItemsDAO.save(updatedEntity);
        } else {
            return null;
        }
    }

    @Override
    public boolean setItemDone(long itemId) {
        return toDoItemsDAOCustom.done(itemId) > 0 ? true : false;
    }

    @Override
    public boolean setItemUndone(long itemId) {
        return toDoItemsDAOCustom.undone(itemId) > 0 ? true : false;
    }

    private boolean isNameValid(String name) {
        String nameWithoutSpaces = name.trim();
        return nameWithoutSpaces != null && !nameWithoutSpaces.isEmpty() && nameWithoutSpaces.length() > 1;
    }
}

package com.todo.list.controllers;

import com.todo.list.entities.ToDoItemEntity;
import com.todo.list.services.IToDoItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private IToDoItemsService itemsService;


    @GetMapping("/items")
    public ResponseEntity<List<ToDoItemEntity>> getAllItems() {
        List<ToDoItemEntity> result = itemsService.getAllItems();
        if (result == null) {
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<ToDoItemEntity> getItemById(@PathVariable("id") long id) {
        ToDoItemEntity result = itemsService.getItemById(id);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/item")
    public ResponseEntity<Void> addItem(@RequestBody ToDoItemEntity newItem) {
        ToDoItemEntity item = itemsService.addItem(newItem);
        if (item == null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/item")
    public ResponseEntity<Void> updateItem(@RequestBody ToDoItemEntity updatedItem) {
        ToDoItemEntity item = itemsService.updateItem(updatedItem);
        if (item == null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/item/{item_id}")
    public ResponseEntity<Void> deleteItem(@PathVariable("item_id") long item_id) {
        itemsService.deleteItem(item_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/increment")
    public ResponseEntity<Void> incrementItemCount(@RequestBody long id) {
        itemsService.incrementItemCount(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/decrement")
    public ResponseEntity<Void> decrementItemCount(@RequestBody long id) {
        itemsService.decrementItemCount(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
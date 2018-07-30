package com.todo.list.controllers;

import com.todo.list.entities.ToDoItemEntity;
import com.todo.list.services.IToDoItemsService;
import com.todo.list.utilities.Utility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = Utility.frontEndAppHostName)
@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private IToDoItemsService itemsService;
    private List<ToDoItemEntity> result;


    @GetMapping("/items")
    public ResponseEntity<List<ToDoItemEntity>> getAllItems() {
        List<ToDoItemEntity> result = itemsService.getAllItems();
        if (result == null) {
            return new ResponseEntity(Collections.emptyList(), HttpStatus.OK);
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

    @RequestMapping(value = "/item", consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
    public @ResponseBody
    ResponseEntity<ToDoItemEntity> addItem(@Valid @RequestBody ToDoItemEntity newItem) {
        if (newItem == null)
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        ToDoItemEntity item = itemsService.addItem(newItem);
        if (item == null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        ResponseEntity<ToDoItemEntity> response = new ResponseEntity(item, HttpStatus.CREATED);
        return response;
    }

    @PostMapping("/item")
    public ResponseEntity<Void> updateItem(@RequestBody ToDoItemEntity updatedItem) {
        if (updatedItem == null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        ToDoItemEntity item = itemsService.updateItem(updatedItem);
        if (item == null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/item/{itemId}")
    public ResponseEntity<Void> deleteItem(@PathVariable("itemId") long itemId) {
        itemsService.deleteItem(itemId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/done/{itemId}")
    public ResponseEntity<Void> setItemDone(@PathVariable("itemId") long itemId) {
        boolean flag = itemsService.setItemDone(itemId);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/undone/{itemId}")
    public ResponseEntity<Void> setItemUndone(@PathVariable("itemId") long itemId) {
        boolean flag = itemsService.setItemUndone(itemId);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

}

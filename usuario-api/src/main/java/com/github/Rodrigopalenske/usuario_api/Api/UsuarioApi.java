package com.github.Rodrigopalenske.usuario_api.Api;

import com.github.Rodrigopalenske.usuario_api.model.Usuario;
import com.github.Rodrigopalenske.usuario_api.service.UsuarioService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("api/usuario")
public class UsuarioApi {

    private final UsuarioService service;

    @PostMapping
    public ResponseEntity salvar(@RequestBody Usuario usuario) {
        try {
            service.salvar(usuario);
            return ResponseEntity.status(201).build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(usuario);
        }
    }
}

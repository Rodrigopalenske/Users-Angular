package com.github.Rodrigopalenske.usuario_api.repository;

import com.github.Rodrigopalenske.usuario_api.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}

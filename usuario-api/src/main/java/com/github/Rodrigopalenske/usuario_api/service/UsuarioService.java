package com.github.Rodrigopalenske.usuario_api.service;

import com.github.Rodrigopalenske.usuario_api.model.Usuario;
import com.github.Rodrigopalenske.usuario_api.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Service
@AllArgsConstructor
public class UsuarioService implements UserDetailsService {

    private final UsuarioRepository repository;

    private final Pattern pattern = Pattern.compile("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$");
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }

    public void salvar(Usuario usuario) {
        if (usuario.getNome().isEmpty() || usuario.getNome().isBlank()) throw new RuntimeException("Nome deve ser preenchido");
        if (usuario.getCpf().isEmpty() || usuario.getCpf().isBlank()) throw new RuntimeException("CPF deve ser preenchido");
        if (usuario.getEmail().isEmpty() || usuario.getEmail().isBlank()) throw new RuntimeException("Email deve ser preenchido");
        if (usuario.getTelefone().isEmpty() || usuario.getTelefone().isBlank()) throw new RuntimeException("Telefone deve ser preenchido");
        if (usuario.getPassword().isEmpty() || usuario.getPassword().isBlank()) throw new RuntimeException("Senha deve ser preenchido");
        Matcher matcher = pattern.matcher(usuario.getPassword());
        if (!matcher.find()) throw new RuntimeException("Senha inválida");

        usuario.setPassword(new BCryptPasswordEncoder().encode(usuario.getPassword()));
        try {
            repository.save(usuario);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

    }
}

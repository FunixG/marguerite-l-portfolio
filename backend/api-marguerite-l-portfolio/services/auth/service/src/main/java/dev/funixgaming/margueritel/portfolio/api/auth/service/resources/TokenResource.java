package dev.funixgaming.margueritel.portfolio.api.auth.service.resources;

import dev.funixgaming.margueritel.portfolio.api.auth.service.services.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/token")
@RequiredArgsConstructor
public class TokenResource {

    private final JwtService jwtService;

    @PostMapping
    public boolean checkToken(@RequestBody String token) {
        return this.jwtService.isTokenValid(token);
    }

}

package dev.funixgaming.margueritel.portfolio.api.auth.api.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "token-service", url = "http://auth/token")
public interface TokenClient {

    @PostMapping
    boolean checkToken(@RequestBody String token);

}

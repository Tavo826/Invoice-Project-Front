import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService)
    const router = inject(Router)

    if (authService.state) {
        return true
    } else {
        router.navigateByUrl('/')
        return false
    }
        
}
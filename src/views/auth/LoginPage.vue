<template>
    <div class="container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <form>
                <input type="text" class="form-control" placeholder="Email">
                <input type="text" class="form-control" placeholder="Password">
                <router-link to="/auth">Register</router-link> <br>
                <button class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>
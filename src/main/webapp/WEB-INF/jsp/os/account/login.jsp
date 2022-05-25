<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관측서비스-로그인페이지</title>
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="/js/os/account/account.js"></script>
    <link rel="stylesheet" href="/css/os/account/account.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
</head>
<body>
    <div class="login-box showed">
        <form class="login-form" action="/login" method="post">
            <h1>ObservationService</h1>
            <input class="txtb" type="text" name="username" placeholder="Username">
            <input class="txtb" type="password" name="password" placeholder="Password">
            <input class="login-btn" type="button" name="login-btn" onclick="goSignUp()" value="회원가입">
            <input class="login-btn" type="button" name="login-btn" onclick="goFindPw()" value="비밀번호 찾기">
            <input class="login-btn" type="submit" name="login-btn" value="로그인">
        </form>
    </div>
</body>
</html>
package os.security.config;

import java.io.IOException;
import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.commons.MessageUtils;

import os.security.service.impl.SecurityMapper;

//@Controller
public class LoginFailuerHandler implements AuthenticationFailureHandler {
	
	@Resource(name = "securityMapper")
	private SecurityMapper mapper;
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
		// 존재하지 않는 아이디 Exception 조정필요
		if (exception instanceof UsernameNotFoundException) {
			request.setAttribute("loginFailMsg", "존재하지 않는 사용자입니다.");
			System.out.println("존재하지 않는 아이디");
		}
		else if(exception instanceof BadCredentialsException) {
			request.setAttribute("loginFailMsg", "아이디 또는 비밀번호가 틀립니다.");
			System.out.println("아이디 패스워드 오류");
		} else if(exception instanceof LockedException) {
			request.setAttribute("loginFailMsg", "잠긴 계정입니다.");
			System.out.println("c");
		} else if(exception instanceof DisabledException) {
			request.setAttribute("loginFailMsg", "계정이 비활성화 되었습니다.");
			System.out.println("계정이 비활성화 되었습니다");
			
		} else if(exception instanceof AuthenticationException) {
			request.setAttribute("loginFailMsg", "만료된 계정입니다..");
			System.out.println("e");
			
		} else if(exception instanceof CredentialsExpiredException) {
			request.setAttribute("loginFailMsg", "비밀번호가 만료되었습니다.");
			System.out.println("f");
		}
		
		failCnt(request, response);
		
		// 로그인 페이지로 다시 포워딩
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/login/login.jsp");
		dispatcher.forward(request, response);
	}
	
	// 로그인 실패 핸들러에서 실행한다 (3회이상 틀리면 계정잠금)
	public void failCnt(HttpServletRequest request, HttpServletResponse response) {
		String userId = request.getParameter("username");
		int exists = mapper.exists(userId);
		// 아이디가 존재하면 실행
		if (exists == 1) {			
			int tryCnt = mapper.selectCnt(userId);
			if (tryCnt>=3) {
				mapper.lock(userId);
				System.out.println("**계정잠금 로직 실행** " + "시도횟수 : " + tryCnt);
			}else {
				mapper.PlusCnt(userId);
				int tryCnt2 = mapper.selectCnt(userId);
				System.out.println("실패카운트 1 적립 " + "시도횟수 : " + tryCnt2);
			}
		}
	}
}
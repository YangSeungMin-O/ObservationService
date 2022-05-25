package os.security.config;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;

import os.security.service.impl.SecurityMapper;

public class LoginSuccessHandler implements AuthenticationSuccessHandler {
	
	@Resource(name = "securityMapper")
	private SecurityMapper mapper;
	
	public String defaultUrl ;
	
	// 세션을 가지고 있는 리퀘스트(요청)
	private RequestCache requestCache = new HttpSessionRequestCache();
	// 다시 요청할 수 있는 리퀘스트(요청)
	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
		
	public String getDefaultUrl() {
		return defaultUrl; 
	}
	
	public void setDefaultUrl(String defaultUrl) {
		this.defaultUrl = defaultUrl;
	}

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
		// 실패횟수 카운트 초기화 메소드 태우기
		resetCnt(request, response);
		System.out.println("login했습니다/ " + defaultUrl + "/ /" + authentication.getAuthorities().toArray()[0].toString());
		redirectStrategy.sendRedirect(request, response, defaultUrl);
	}
	// 실패횟수 카운트 초기화
	public void resetCnt(HttpServletRequest request, HttpServletResponse response) {
		String userId = request.getParameter("username");
		// 해당 USER ID의 실패횟수 카운트 초기화
		mapper.resetCnt(userId);
	}
	
}

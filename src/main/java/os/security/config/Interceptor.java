package os.security.config;

import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import os.security.service.impl.SecurityMapper;

// 인터셉터에서 1차적으로 URL을 걸러서 넘겨준다
public class Interceptor extends HandlerInterceptorAdapter {
	
	@Resource(name = "securityMapper")
	private SecurityMapper securityMapper;
	
	// 전처리 로직 (컨트롤러에서 클라이언트로 요청이 갈 때 가로챔)
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		// 매게변수를 SQL로 전달할 해쉬맵
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		// 사용자 요청 URL
		String URL = request.getRequestURI().toString();
		params.put("url", URL);
		
		// 현재 사용자 권한
		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();
		String permisson = authentication.getAuthorities().toArray()[0].toString();
		
		// 요청한URL에 필요권한
		String result =  securityMapper.select(params);
		
		// 잘못된 접근 처리 (사용자가 요청한권한이 ADMIN이 아니고 요청권한이 DB에서 필요로하는 권한이 아닐 때)
		if (!(permisson.equals("ROLE_ADMIN"))&&!(permisson.equals(result))) {
			// 잘못된 접근 처리2 (로그인된 사용자가 loginPage에 접근하려고 할 때)
			if (URL.equals("/loginPage.do") &&!(permisson.equals("ROLE_ANONYMOUS"))) {
				System.out.println("잘못된접근 발생! 사유 = 이미 권한보유중");
				response.sendRedirect("/mainPage.do");
				return false;
			};
				System.out.println("잘못된접근 발생! 사유 = 권한없음");
				response.sendRedirect("/ErrorPage.do");
				return false;
		};
		
		// 정상적 접근 처리
		return super.preHandle(request, response, handler);
	}	
}

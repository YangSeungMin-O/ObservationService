package os.account.web;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import os.account.service.AccountService;

@Controller
public class AccountController {
	
	@Resource(name = "accountService")
	private AccountService service;

	/* 메인 페이지 */
	@RequestMapping(value = "/loginPage.do")
	public ModelAndView loginPage(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> commandMap) throws Exception {
		ModelAndView mav = new ModelAndView();		
		String resultURL = "account/login";
		mav.setViewName(resultURL);
		return mav;
	}
	
	/* 회원가입 페이지 */
	@RequestMapping(value = "/signUpPage.do")
	public ModelAndView signUpPage(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> commandMap) throws Exception {
		ModelAndView mav = new ModelAndView();		
		String resultURL = "account/signup";
		mav.setViewName(resultURL);
		return mav;
	}
	
	/* 비밀번호찾기 페이지 */
	@RequestMapping(value = "/forgotPwPage.do")
	public ModelAndView forgotPwPage(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> commandMap) throws Exception {
		ModelAndView mav = new ModelAndView();		
		String resultURL = "account/forgotPw";
		mav.setViewName(resultURL);
		return mav;
	}
}

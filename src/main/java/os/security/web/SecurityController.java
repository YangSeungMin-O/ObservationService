package os.security.web;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import os.security.config.CustomUserDetailesService;
import os.security.service.SecurityService;

@Controller
public class SecurityController {
	@Autowired
	private JavaMailSender mailSender;
	
	@Resource(name = "customDetailService")
	private CustomUserDetailesService customService;
	
	@Resource(name = "securityService")
	private SecurityService service;
	
	/* 로그인 페이지 */
	@RequestMapping(value = "/loginPage.do")
	public ModelAndView loginPage(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> commandMap) throws Exception {
		ModelAndView mav = new ModelAndView();		
		String resultURL = "account/login";
		mav.setViewName(resultURL);
		return mav;
	}
	// 회원가입 페이지
	@RequestMapping(value = "/signUpPage.do")
	public String signUpPage() {
		return "login/signUp";
	}
	// 비밀번호찾기 페이지
	@RequestMapping(value = "/findPassWord.do")
	public String findPassWord() {
		return "login/find";
	}
	// 관리자페이지
	@RequestMapping(value = "/adminPage.do")
	public String adminPage() {
		return "login/admin";
	}
	// 403 에러페이지 
	@RequestMapping(value = "/ErrorPage.do")
	public String errorPage() {
		return "login/error";
	}
	// 회원가입 기능(JS에서 회원가입 데이터 받아옴)
	@RequestMapping(value = "/signUp.do", method = RequestMethod.POST)
	public ModelAndView signUp(@RequestParam HashMap<String, Object>params) {
		ModelAndView jsonView = new ModelAndView("jsonView");
		
		// 커스텀유저서비스로 회원가입 데이터 전송
		customService.signUp(params);
		return jsonView;
	}
	
	//이메일 전송기능
	@RequestMapping(value = "/email.do", method = RequestMethod.POST)
	public ModelAndView email(@RequestParam HashMap<String, Object> params) {
		ModelAndView jsonView = new ModelAndView("jsonView");
		
		int passKey = (int)(Math.random()*10000) + 1;

		String eMail = "ysm6768@gmail.com";
		String toMail = (String) params.get("toMail");
		String title = "비밀번호찾기 인증번호";
		
		String content = "자바에서 이메일 인증을 위해 테스트용도로 보낸 이메일 입니다.\n 인증번호입니다 : " + passKey;
	
		try {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");
			//보내는사람 생략하면 정상작동을 안함
			messageHelper.setFrom(eMail);
			//받는사람 이메일
			messageHelper.setTo(toMail);
			//메일제목은 생략이 가능하다
			messageHelper.setSubject(title);
			//메일 내용은 AUTO
			messageHelper.setText(content); 
			//메일전송
			mailSender.send(message);
			
			jsonView.addObject("result", 1);
		} catch (Exception e) {
			System.out.println(e);
			jsonView.addObject("result", 0);
		}
		
		jsonView.addObject("passKey", passKey);
		return jsonView;
	}
}

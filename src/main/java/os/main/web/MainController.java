package os.main.web;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import os.main.service.MainService;

@Controller
public class MainController {

	@Resource(name = "mainService")
	private MainService service;
	
	/* 메인페이지 */
	@RequestMapping(value = "/mainPage.do")
	public ModelAndView mainPage(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> commandMap) throws Exception {
		ModelAndView mav = new ModelAndView();		
		String resultURL = "main/main";
		mav.setViewName(resultURL);
		return mav;
	}
	
	/* 메인페이지 데이터 */
}

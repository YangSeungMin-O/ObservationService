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
		String resultURL = "mainPage/mainPage";
		mav.setViewName(resultURL);
		return mav;
	}
	
	/* 기상청 단기예보(동네예보) API */
/*	@RequestMapping(value = "/weatherData.do")
	public ModelAndView weatherApi(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> commandMap) throws Exception {
		ModelAndView jsonView = new ModelAndView("jsonView");
        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1360000/VilageFcstMsgService/getWthrSituation"); URL
        urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=9wnMobsB4Ky4A%2BrjVg9P3BBdVjFEmqEEI70Uc49cCp8bNo%2Bopo3J%2FjtjlbGGbcp4yax%2BWzn%2BjGn23RF4DBtwfg%3D%3D"); Service Key
        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); 페이지번호
        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("10", "UTF-8")); 한 페이지 결과 수
        urlBuilder.append("&" + URLEncoder.encode("dataType","UTF-8") + "=" + URLEncoder.encode("JSON", "UTF-8")); 요청자료형식(XML/JSON)Default: XML
        urlBuilder.append("&" + URLEncoder.encode("stnId","UTF-8") + "=" + URLEncoder.encode("108", "UTF-8")); 108 기상청, 109 수도권(서울)..등 별첨 엑셀자료 참조(‘개황’ 구분 값 참고)
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
        	System.out.println(line);
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        System.out.println(sb.toString());
		return jsonView;
    }
*/	
}

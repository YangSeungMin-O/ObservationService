package os.security.config;

import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import os.security.service.impl.SecurityMapper;
import os.security.web.SecurityVO;
@Service("customDetailService")
public class CustomUserDetailesService implements UserDetailsService {
	
	@Resource(name = "securityMapper")
	private SecurityMapper mapper;
	
	@Autowired
	public PasswordEncoder incoder;
	
	@Override  
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// 사용자 정보 가져와서 VO에서 조회(권한, 계정잠금여부, 아이디, 비밀번호, 이름)
		SecurityVO vo = mapper.login(username);
		
		// 가져온 사용자 정보가 없다면 존재하지 않는ID Exception으로 처리
		if (vo == null) {
			System.out.println(new UsernameNotFoundException(username + "없는 아이디"));
			// 현재 밑에있는 예외처리가 작동을 안하고 있음
			throw new UsernameNotFoundException(username + "없는 아이디");
		}
		return vo; 
	}
	// 회원가입 -> 시큐리티컨트롤러에서 받아온(PARAMS = 회원가입데이터)
	public void signUp(HashMap<String, Object> params) throws UsernameNotFoundException{
		// 아이디
		String id = (String) params.get("id");
		@SuppressWarnings("deprecation")
		// 패스워드 암호화
		String pw = incoder.encodePassword((String) params.get("password"), (String)params.get("id"));
		// 기존 패스워드
		String originPW = (String) params.get("password");
		// 실패카운트 INT형으로 형변환
		int failcnt = Integer.parseInt((String)params.get("failcnt"));
		// 형변환된 FAILCNT로 PARAMS에 덮어씌우기
		params.put("failcnt", failcnt);
		// 암호화된 PassWord로 PARAMS에 덮어씌우기
		params.put("password", pw);
		System.out.println("회원가입ID : " + id + " " + "회원가입PW : " + originPW);
		// (PARAMS = 패스워드만 암호화 된 회원가입 데이터) -> MAPPER를 통해 Insert작업 요청
		mapper.signUp(params);
	}
}

package os.security.web;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.inject.Named;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

// 사용자입력값을 BINDING하여 가져오기 및 계쩡유효성 여부 확인
public class SecurityVO implements UserDetails {

	private String username; 
	private String userId;
	private String userPw; 
	private String authorities;
	private boolean enabled;
	
	// 권한 확인
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		ArrayList<GrantedAuthority> auth = new ArrayList<GrantedAuthority>();
		auth.add(new SimpleGrantedAuthority(authorities));
		return auth;
	}
	// user Pw get
	@Override
	public String getPassword() {
		return userPw;
	}
	// user Name get
	@Override
	public String getUsername() {
		return username;
	}
	// 계정 만료 여부 확인
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	// 계정 잠금 여부 확인
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	// 패스워드 만료 여부 확인
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	// 계정 활성화 여부 확인
	@Override
	public boolean isEnabled() {
		return enabled;
	}
	// user Id get
	public String getUserId() {
		return userId;
	}
	// user Id set
	public void setUserId(String userId) {
		this.userId = userId;
	}
	// user Pw get
	public String getUserPw() {
		return userPw;
	}
	// user Pw set
	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}
	// user Name set
	public void setUsername(String username) {
		this.username = username;
	}
	// user Authorities set
	public void setAuthorities(String authorities) {
		this.authorities = authorities;
	}
	// user Enabled set
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
}
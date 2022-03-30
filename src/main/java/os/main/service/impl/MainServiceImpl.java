package os.main.service.impl;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import os.main.service.MainService;

@Service("mainService")
public class MainServiceImpl implements MainService {
	
	@Resource(name = "mainMapper")
	private MainMapper mapper;

	@Override
	public int getCount() {
		return mapper.getCount();
	}

}

/**
 * CareerSphere - Reactive Application Engine
 * Pure Vanilla JavaScript: State Management, Real-time Filters, Multi-step Application Wizard,
 * Candidate & Employer Portals, Messaging, Live Job Posting, SVG Analytics Charts, and Themes.
 */

// =============================================================================
// GLOBAL STATE MANAGEMENT
// =============================================================================

const AppState = {
  // Datasets (with localStorage persistence)
  jobs: JSON.parse(localStorage.getItem("cs_jobs")) || INITIAL_JOBS,
  companies: INITIAL_COMPANIES,
  candidate: JSON.parse(localStorage.getItem("cs_candidate")) || INITIAL_CANDIDATE,
  applications: JSON.parse(localStorage.getItem("cs_applications")) || INITIAL_APPLICATIONS,
  savedJobIds: new Set(JSON.parse(localStorage.getItem("cs_saved_jobs")) || INITIAL_SAVED_JOBS),
  resumes: JSON.parse(localStorage.getItem("cs_resumes")) || INITIAL_RESUMES,
  conversations: JSON.parse(localStorage.getItem("cs_conversations")) || INITIAL_CONVERSATIONS,
  notifications: JSON.parse(localStorage.getItem("cs_notifs")) || INITIAL_NOTIFICATIONS,
  resources: INITIAL_RESOURCES,
  employer: JSON.parse(localStorage.getItem("cs_employer")) || INITIAL_EMPLOYER_DATA,

  // UI States
  currentView: "home",
  theme: localStorage.getItem("cs_theme") || "dark",
  jobsViewMode: "grid", // 'grid' | 'list'
  featuredCategory: "all",
  activeConversationId: "conv-01",
  analyticsTimeframe: "7D",
  currentCandidateTab: "overview",
  currentEmployerTab: "overview",
  currentCandidateAppFilter: "all",
  currentEmployerCandFilter: "all",
  currentCompanySector: "all",
  currentResourceCategory: "all",

  // Modals & Wizard State
  activeModalJobId: null,
  activeSchedulingCandId: null,
  wizardStep: 1,
  selectedJobForApplication: null
};

// =============================================================================
// INITIALIZATION
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSkillsFilterCloud();
  renderFeaturedJobs();
  renderHomeCompanies();
  renderHomeResources();
  renderCompaniesDirectory();
  renderResourcesDirectory();
  renderCandidateDashboard();
  renderEmployerDashboard();
  renderNotifications();
  applyJobFilters();
  setupNavbarScroll();
  handleHashNavigation();

  // Listen for hash changes
  window.addEventListener("hashchange", handleHashNavigation);

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Sync Helper to localStorage
function persistState() {
  localStorage.setItem("cs_jobs", JSON.stringify(AppState.jobs));
  localStorage.setItem("cs_candidate", JSON.stringify(AppState.candidate));
  localStorage.setItem("cs_applications", JSON.stringify(AppState.applications));
  localStorage.setItem("cs_saved_jobs", JSON.stringify(Array.from(AppState.savedJobIds)));
  localStorage.setItem("cs_resumes", JSON.stringify(AppState.resumes));
  localStorage.setItem("cs_conversations", JSON.stringify(AppState.conversations));
  localStorage.setItem("cs_notifs", JSON.stringify(AppState.notifications));
  localStorage.setItem("cs_employer", JSON.stringify(AppState.employer));
}

// =============================================================================
// ROUTING & VIEW NAVIGATION
// =============================================================================

function navigateTo(viewName) {
  AppState.currentView = viewName;
  window.location.hash = viewName;

  // Hide all views
  const views = document.querySelectorAll(".page-view");
  views.forEach(v => {
    v.style.display = "none";
  });

  // Show target view
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update active links
  document.querySelectorAll("#desktop-nav .nav-link").forEach(link => {
    if (link.getAttribute("data-view") === viewName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Re-render view-specific data if needed
  if (viewName === "candidate-dashboard") {
    renderCandidateDashboard();
  } else if (viewName === "employer-dashboard") {
    renderEmployerDashboard();
  } else if (viewName === "jobs") {
    applyJobFilters();
  }

  // Re-initialize Lucide Icons
  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 50);
}

function handleHashNavigation() {
  const hash = window.location.hash.replace("#", "") || "home";
  const validViews = ["home", "jobs", "companies", "resources", "candidate-dashboard", "employer-dashboard"];
  if (validViews.includes(hash)) {
    navigateTo(hash);
  } else {
    navigateTo("home");
  }
}

function setupNavbarScroll() {
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("navbar-scrolled");
    } else {
      header.classList.remove("navbar-scrolled");
    }
  });
}

function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-drawer");
  if (drawer.style.display === "flex") {
    drawer.style.display = "none";
  } else {
    drawer.style.display = "flex";
  }
}

// =============================================================================
// THEME SWITCHER
// =============================================================================

function initTheme() {
  if (AppState.theme === "light") {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
    updateThemeIcon("moon");
  } else {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
    updateThemeIcon("sun");
  }
}

function toggleTheme() {
  if (document.body.classList.contains("theme-light")) {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
    AppState.theme = "dark";
    updateThemeIcon("sun");
    showToast("Switched to Midnight Dark Theme", "info");
  } else {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
    AppState.theme = "light";
    updateThemeIcon("moon");
    showToast("Switched to Soft Light Theme", "info");
  }
  localStorage.setItem("cs_theme", AppState.theme);
  // Redraw SVG chart colors if active
  renderAnalyticsChart();
}

function updateThemeIcon(iconName) {
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.setAttribute("data-lucide", iconName);
    if (window.lucide) window.lucide.createIcons();
  }
}

// =============================================================================
// TOAST NOTIFICATION SYSTEM
// =============================================================================

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;

  let iconName = "info";
  if (type === "success") iconName = "check-circle-2";
  if (type === "warning") iconName = "alert-triangle";

  toast.innerHTML = `
    <i data-lucide="${iconName}" style="width: 20px; height: 20px; flex-shrink: 0; color: ${type === 'success' ? 'var(--accent-emerald)' : 'var(--primary-blue)'}"></i>
    <div style="font-size: 0.88rem; font-weight: 500; line-height: 1.4;">${message}</div>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, 3500);
}

// =============================================================================
// HERO & QUICK SEARCH
// =============================================================================

function executeHeroSearch() {
  const keywords = document.getElementById("hero-search-keywords").value.trim();
  const location = document.getElementById("hero-search-location").value.trim();
  const mode = document.getElementById("hero-search-mode").value;

  navigateTo("jobs");

  // Populate Jobs page inputs
  const jobSearchInput = document.getElementById("jobs-search-input");
  const jobLocationInput = document.getElementById("jobs-location-input");
  if (jobSearchInput) jobSearchInput.value = keywords;
  if (jobLocationInput) jobLocationInput.value = location;

  // Set mode checkboxes
  if (mode !== "all") {
    const checkboxes = document.querySelectorAll('input[name="workMode"]');
    checkboxes.forEach(cb => {
      cb.checked = (cb.value === mode);
    });
  }

  applyJobFilters();
}

function quickFilterSearch(keyword) {
  navigateTo("jobs");
  const jobSearchInput = document.getElementById("jobs-search-input");
  if (jobSearchInput) {
    jobSearchInput.value = keyword;
    applyJobFilters();
  }
}

function quickFilterCategory(category) {
  navigateTo("jobs");
  const industrySelect = document.getElementById("filter-industry");
  if (industrySelect) {
    if (category === "AI & Data" || category === "Engineering") {
      industrySelect.value = "Technology";
    } else if (category === "Design") {
      industrySelect.value = "Marketing";
    } else if (category === "Finance") {
      industrySelect.value = "Finance";
    }
    applyJobFilters();
  }
}

function focusMainSearch() {
  navigateTo("jobs");
  const input = document.getElementById("jobs-search-input");
  if (input) input.focus();
}

// =============================================================================
// FEATURED JOBS SECTION (HOME PAGE)
// =============================================================================

function filterFeaturedJobs(category) {
  AppState.featuredCategory = category;

  // Update tabs active state
  document.querySelectorAll(".featured-tab").forEach(tab => {
    if (tab.getAttribute("data-cat") === category) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  renderFeaturedJobs();
}

function renderFeaturedJobs() {
  const container = document.getElementById("featured-jobs-grid");
  if (!container) return;

  let filtered = AppState.jobs.filter(j => j.featured);
  if (AppState.featuredCategory !== "all") {
    if (AppState.featuredCategory === "Remote") {
      filtered = filtered.filter(j => j.workMode === "Remote");
    } else {
      filtered = filtered.filter(j => j.category === AppState.featuredCategory);
    }
  }

  // Take top 6
  const list = filtered.slice(0, 6);

  container.innerHTML = list.map(job => createJobCardHtml(job)).join("");

  if (window.lucide) window.lucide.createIcons();
}

// =============================================================================
// ADVANCED JOB SEARCH & FILTERS ENGINE
// =============================================================================

const SKILLS_LIST = ["React", "TypeScript", "Python", "Go", "Next.js", "Node.js", "AWS", "Kubernetes", "Figma", "Docker", "Tailwind CSS", "GraphQL"];
const activeSelectedSkills = new Set();

function initSkillsFilterCloud() {
  const container = document.getElementById("skills-filter-cloud");
  if (!container) return;

  container.innerHTML = SKILLS_LIST.map(skill => `
    <button type="button" onclick="toggleFilterSkill('${skill}')" id="skill-btn-${skill.replace(/\s+/g, '')}" class="skill-pill" style="cursor: pointer;">
      ${skill}
    </button>
  `).join("");
}

function toggleFilterSkill(skill) {
  const btn = document.getElementById(`skill-btn-${skill.replace(/\s+/g, '')}`);
  if (activeSelectedSkills.has(skill)) {
    activeSelectedSkills.delete(skill);
    if (btn) btn.style.background = "";
    if (btn) btn.style.borderColor = "";
  } else {
    activeSelectedSkills.add(skill);
    if (btn) btn.style.background = "rgba(37, 99, 235, 0.25)";
    if (btn) btn.style.borderColor = "var(--primary-blue)";
  }
  applyJobFilters();
}

function updateSalaryLabel(val) {
  const label = document.getElementById("salary-range-label");
  if (label) {
    label.textContent = `$${parseInt(val, 10).toLocaleString()} / yr`;
  }
}

function setViewMode(mode) {
  AppState.jobsViewMode = mode;
  const gridBtn = document.getElementById("view-mode-grid");
  const listBtn = document.getElementById("view-mode-list");

  if (mode === "grid") {
    gridBtn.style.background = "rgba(255, 255, 255, 0.1)";
    listBtn.style.background = "transparent";
  } else {
    listBtn.style.background = "rgba(255, 255, 255, 0.1)";
    gridBtn.style.background = "transparent";
  }

  applyJobFilters();
}

function applyJobFilters() {
  const searchInput = document.getElementById("jobs-search-input");
  const locationInput = document.getElementById("jobs-location-input");
  const salaryRange = document.getElementById("filter-salary");
  const industrySelect = document.getElementById("filter-industry");
  const sortSelect = document.getElementById("jobs-sort-select");

  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const locationQuery = locationInput ? locationInput.value.toLowerCase().trim() : "";
  const minSalary = salaryRange ? parseInt(salaryRange.value, 10) : 50000;
  const industry = industrySelect ? industrySelect.value : "all";
  const sortBy = sortSelect ? sortSelect.value : "relevant";

  // Selected work modes
  const selectedModes = Array.from(document.querySelectorAll('input[name="workMode"]:checked')).map(cb => cb.value);
  // Selected job types
  const selectedTypes = Array.from(document.querySelectorAll('input[name="jobType"]:checked')).map(cb => cb.value);
  // Selected experiences
  const selectedExps = Array.from(document.querySelectorAll('input[name="experience"]:checked')).map(cb => cb.value);

  let results = AppState.jobs.filter(job => {
    // Text search in title, company, skills, description
    if (query) {
      const matchTitle = job.title.toLowerCase().includes(query);
      const matchCompany = job.companyName.toLowerCase().includes(query);
      const matchSkills = job.skills.some(s => s.toLowerCase().includes(query));
      const matchDesc = job.description.toLowerCase().includes(query);
      if (!matchTitle && !matchCompany && !matchSkills && !matchDesc) return false;
    }

    // Location
    if (locationQuery) {
      const matchLoc = job.location.toLowerCase().includes(locationQuery);
      const matchMode = job.workMode.toLowerCase().includes(locationQuery);
      if (!matchLoc && !matchMode) return false;
    }

    // Salary filter (job maxSalary or minSalary must reach minimum requested)
    if (job.maxSalary && job.maxSalary < minSalary) {
      return false;
    }

    // Work Mode
    if (selectedModes.length > 0 && !selectedModes.includes(job.workMode)) {
      return false;
    }

    // Job Type
    if (selectedTypes.length > 0 && !selectedTypes.includes(job.jobType)) {
      return false;
    }

    // Experience
    if (selectedExps.length > 0 && !selectedExps.includes(job.experience)) {
      return false;
    }

    // Industry
    if (industry !== "all" && job.industry !== industry) {
      return false;
    }

    // Skills tag cloud filter
    if (activeSelectedSkills.size > 0) {
      const hasSkill = Array.from(activeSelectedSkills).some(s => job.skills.includes(s));
      if (!hasSkill) return false;
    }

    return true;
  });

  // Sorting
  if (sortBy === "salary-high") {
    results.sort((a, b) => (b.maxSalary || 0) - (a.maxSalary || 0));
  } else if (sortBy === "salary-low") {
    results.sort((a, b) => (a.minSalary || 0) - (b.minSalary || 0));
  } else if (sortBy === "newest") {
    results.reverse();
  }

  // Update counts
  const heading = document.getElementById("jobs-count-heading");
  if (heading) {
    heading.textContent = `${results.length} Opportunities Found`;
  }

  // Render active filter pills
  renderActiveFilterPills({ query, locationQuery, minSalary, selectedModes, selectedTypes, industry });

  // Render cards container
  const container = document.getElementById("jobs-results-container");
  const emptyState = document.getElementById("jobs-empty-state");

  if (!container) return;

  if (results.length === 0) {
    container.style.display = "none";
    if (emptyState) emptyState.style.display = "block";
  } else {
    container.style.display = "grid";
    if (emptyState) emptyState.style.display = "none";

    if (AppState.jobsViewMode === "list") {
      container.style.gridTemplateColumns = "1fr";
      container.innerHTML = results.map(j => createJobListItemHtml(j)).join("");
    } else {
      container.style.gridTemplateColumns = "repeat(auto-fill, minmax(340px, 1fr))";
      container.innerHTML = results.map(j => createJobCardHtml(j)).join("");
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

function renderActiveFilterPills(filters) {
  const pillsContainer = document.getElementById("active-filter-pills");
  if (!pillsContainer) return;

  const pills = [];

  if (filters.query) {
    pills.push({ label: `Query: "${filters.query}"`, clear: () => { document.getElementById("jobs-search-input").value = ""; } });
  }
  if (filters.locationQuery) {
    pills.push({ label: `Location: "${filters.locationQuery}"`, clear: () => { document.getElementById("jobs-location-input").value = ""; } });
  }
  if (filters.minSalary > 50000) {
    pills.push({ label: `Min: $${filters.minSalary.toLocaleString()}`, clear: () => { document.getElementById("filter-salary").value = 50000; updateSalaryLabel(50000); } });
  }
  filters.selectedModes.forEach(mode => {
    pills.push({
      label: mode,
      clear: () => {
        const cb = document.querySelector(`input[name="workMode"][value="${mode}"]`);
        if (cb) cb.checked = false;
      }
    });
  });
  if (filters.industry && filters.industry !== "all") {
    pills.push({ label: `Industry: ${filters.industry}`, clear: () => { document.getElementById("filter-industry").value = "all"; } });
  }
  Array.from(activeSelectedSkills).forEach(skill => {
    pills.push({ label: `Skill: ${skill}`, clear: () => { toggleFilterSkill(skill); } });
  });

  pillsContainer.innerHTML = pills.map((p, index) => `
    <span class="badge badge-cyan" style="padding: 0.3rem 0.75rem; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 0.4rem;">
      ${p.label}
      <button type="button" onclick="clearFilterByIndex(${index})" style="color: inherit; cursor: pointer; display: flex; align-items: center;">
        <i data-lucide="x" style="width: 12px; height: 12px;"></i>
      </button>
    </span>
  `).join("");

  window._activePillClears = pills.map(p => p.clear);
}

function clearFilterByIndex(index) {
  if (window._activePillClears && window._activePillClears[index]) {
    window._activePillClears[index]();
    applyJobFilters();
  }
}

function resetJobFilters() {
  const searchInput = document.getElementById("jobs-search-input");
  const locationInput = document.getElementById("jobs-location-input");
  const salaryRange = document.getElementById("filter-salary");
  const industrySelect = document.getElementById("filter-industry");

  if (searchInput) searchInput.value = "";
  if (locationInput) locationInput.value = "";
  if (salaryRange) {
    salaryRange.value = 50000;
    updateSalaryLabel(50000);
  }
  if (industrySelect) industrySelect.value = "all";

  document.querySelectorAll('#jobs-filter-form input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });

  activeSelectedSkills.clear();
  document.querySelectorAll("#skills-filter-cloud .skill-pill").forEach(btn => {
    btn.style.background = "";
    btn.style.borderColor = "";
  });

  applyJobFilters();
  showToast("All discovery filters have been cleared", "info");
}

// =============================================================================
// JOB CARD TEMPLATES & BOOKMARKS
// =============================================================================

function isJobSaved(jobId) {
  return AppState.savedJobIds.has(jobId);
}

function toggleSaveJob(jobId, event) {
  if (event) event.stopPropagation();

  if (AppState.savedJobIds.has(jobId)) {
    AppState.savedJobIds.delete(jobId);
    showToast("Removed from saved bookmarks", "info");
  } else {
    AppState.savedJobIds.add(jobId);
    showToast("Job saved to your bookmarks!", "success");
  }

  persistState();

  // Update UI bookmark buttons
  document.querySelectorAll(`.btn-bookmark[data-job-id="${jobId}"]`).forEach(btn => {
    if (AppState.savedJobIds.has(jobId)) {
      btn.classList.add("saved");
      btn.innerHTML = `<i data-lucide="bookmark-check" style="width: 17px; height: 17px;"></i>`;
    } else {
      btn.classList.remove("saved");
      btn.innerHTML = `<i data-lucide="bookmark" style="width: 17px; height: 17px;"></i>`;
    }
  });

  // Update Candidate dashboard counter
  const badge = document.getElementById("cand-saved-count-badge");
  if (badge) badge.textContent = AppState.savedJobIds.size;

  if (window.lucide) window.lucide.createIcons();
}

function createJobCardHtml(job) {
  const saved = isJobSaved(job.id);
  const skillsHtml = job.skills.slice(0, 4).map(s => `<span class="skill-pill">${s}</span>`).join("");

  return `
    <article class="job-card ${job.featured ? 'job-card-featured' : ''}" onclick="openJobDetails('${job.id}')" style="cursor: pointer;">
      
      <!-- Card Header -->
      <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div class="company-logo-box" style="background: ${job.companyLogoColor || '#2563EB'};">
            ${job.companyLetter || 'CS'}
          </div>
          <div>
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan); display: flex; align-items: center; gap: 0.3rem;">
              ${job.companyName}
            </span>
            <h3 style="font-size: 1.15rem; font-weight: 700; margin-top: 0.15rem; line-height: 1.3;">${job.title}</h3>
          </div>
        </div>

        <button class="btn-bookmark ${saved ? 'saved' : ''}" data-job-id="${job.id}" onclick="toggleSaveJob('${job.id}', event)" title="Save Job">
          <i data-lucide="${saved ? 'bookmark-check' : 'bookmark'}" style="width: 17px; height: 17px;"></i>
        </button>
      </div>

      <!-- Tags Row -->
      <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; font-size: 0.8rem;">
        <span class="badge badge-blue"><i data-lucide="map-pin" style="width: 12px; height: 12px;"></i> ${job.location}</span>
        <span class="badge badge-emerald"><i data-lucide="briefcase" style="width: 12px; height: 12px;"></i> ${job.jobType}</span>
        <span class="badge badge-violet">${job.experience}</span>
      </div>

      <!-- Skills Row -->
      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
        ${skillsHtml}
      </div>

      <!-- Footer Row -->
      <div class="job-card-footer" style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 0.9rem; margin-top: auto;">
        <div>
          <span style="font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; color: var(--text-primary);">${job.salaryRange}</span>
          <span style="display: block; font-size: 0.72rem; color: var(--text-muted);">${job.postedDate}</span>
        </div>

        <div class="job-card-actions" style="display: flex; gap: 0.5rem;" onclick="event.stopPropagation()">
          <button onclick="openJobDetails('${job.id}')" class="btn-secondary" style="padding: 0.45rem 0.9rem; font-size: 0.82rem;">View</button>
          <button onclick="openApplicationModal('${job.id}')" class="btn-gradient" style="padding: 0.45rem 1rem; font-size: 0.82rem;">Apply Now</button>
        </div>
      </div>

    </article>
  `;
}

function createJobListItemHtml(job) {
  const saved = isJobSaved(job.id);
  const skillsHtml = job.skills.map(s => `<span class="skill-pill">${s}</span>`).join("");

  return `
    <article class="job-card ${job.featured ? 'job-card-featured' : ''}" onclick="openJobDetails('${job.id}')" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; padding: 1.25rem 1.75rem;">
      
      <div style="display: flex; align-items: center; gap: 1.25rem; flex: 1; min-width: 280px;">
        <div class="company-logo-box" style="background: ${job.companyLogoColor || '#2563EB'};">
          ${job.companyLetter || 'CS'}
        </div>
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 0.82rem; font-weight: 600; color: var(--accent-cyan);">${job.companyName}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">· ${job.postedDate}</span>
          </div>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-top: 0.15rem;">${job.title}</h3>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.5rem;">
            ${skillsHtml}
          </div>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;">
        <div>
          <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.15rem;">${job.salaryRange}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${job.location} · ${job.workMode}</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.6rem;" onclick="event.stopPropagation()">
          <button class="btn-bookmark ${saved ? 'saved' : ''}" data-job-id="${job.id}" onclick="toggleSaveJob('${job.id}', event)" title="Save Job">
            <i data-lucide="${saved ? 'bookmark-check' : 'bookmark'}" style="width: 17px; height: 17px;"></i>
          </button>
          <button onclick="openJobDetails('${job.id}')" class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">Details</button>
          <button onclick="openApplicationModal('${job.id}')" class="btn-gradient" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">Apply</button>
        </div>
      </div>

    </article>
  `;
}

// =============================================================================
// COMPANY DIRECTORY
// =============================================================================

function renderHomeCompanies() {
  const container = document.getElementById("home-companies-grid");
  if (!container) return;

  const top6 = AppState.companies.slice(0, 6);
  container.innerHTML = top6.map(c => createCompanyCardHtml(c)).join("");
  if (window.lucide) window.lucide.createIcons();
}

function renderCompaniesDirectory() {
  const container = document.getElementById("companies-directory-grid");
  if (!container) return;

  let list = AppState.companies;
  if (AppState.currentCompanySector !== "all") {
    list = list.filter(c => c.category === AppState.currentCompanySector);
  }

  const query = document.getElementById("company-search-input") ? document.getElementById("company-search-input").value.toLowerCase().trim() : "";
  if (query) {
    list = list.filter(c => c.name.toLowerCase().includes(query) || c.industry.toLowerCase().includes(query) || c.tagline.toLowerCase().includes(query));
  }

  container.innerHTML = list.map(c => createCompanyCardHtml(c)).join("");
  if (window.lucide) window.lucide.createIcons();
}

function filterCompanySector(sector) {
  AppState.currentCompanySector = sector;
  document.querySelectorAll(".company-tab").forEach(tab => {
    if (tab.getAttribute("data-sector") === sector) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  renderCompaniesDirectory();
}

function filterCompanies() {
  renderCompaniesDirectory();
}

function createCompanyCardHtml(company) {
  return `
    <div class="glass-panel glass-panel-interactive" style="padding: 1.5rem; border-radius: var(--radius-lg); display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div class="company-logo-box" style="background: ${company.logoColor || '#2563EB'};">
              ${company.logoLetter || 'CS'}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 0.35rem;">
                <h3 style="font-size: 1.15rem; font-weight: 700;">${company.name}</h3>
                ${company.verified ? '<i data-lucide="check-circle" style="width: 15px; height: 15px; color: var(--accent-cyan);"></i>' : ''}
              </div>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${company.industry} · Founded ${company.founded}</span>
            </div>
          </div>
          <span class="badge badge-amber" style="font-size: 0.75rem;">
            <i data-lucide="star" style="width: 12px; height: 12px; fill: #F59E0B;"></i> ${company.rating}
          </span>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">
          ${company.tagline}
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1.5rem; background: rgba(7, 17, 31, 0.4); padding: 0.75rem; border-radius: var(--radius-sm);">
          <div><i data-lucide="users" style="width: 13px; height: 13px;"></i> ${company.employees}</div>
          <div><i data-lucide="map-pin" style="width: 13px; height: 13px;"></i> ${company.location}</div>
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 0.85rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan);">${company.openPositions} Active Jobs</span>
        <button onclick="viewCompanyJobs('${company.name}')" class="btn-outline-blue" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
          View Roles
        </button>
      </div>
    </div>
  `;
}

function viewCompanyJobs(companyName) {
  navigateTo("jobs");
  const input = document.getElementById("jobs-search-input");
  if (input) {
    input.value = companyName;
    applyJobFilters();
  }
}

// =============================================================================
// CAREER RESOURCES SECTION
// =============================================================================

function renderHomeResources() {
  const container = document.getElementById("home-resources-grid");
  if (!container) return;

  const top3 = AppState.resources.slice(0, 3);
  container.innerHTML = top3.map(r => createResourceCardHtml(r)).join("");
  if (window.lucide) window.lucide.createIcons();
}

function renderResourcesDirectory() {
  const container = document.getElementById("resources-cards-grid");
  if (!container) return;

  let list = AppState.resources;
  if (AppState.currentResourceCategory !== "all") {
    list = list.filter(r => r.category === AppState.currentResourceCategory);
  }

  container.innerHTML = list.map(r => createResourceCardHtml(r)).join("");
  if (window.lucide) window.lucide.createIcons();
}

function filterResourceCategory(cat) {
  AppState.currentResourceCategory = cat;
  document.querySelectorAll(".resource-tab").forEach(tab => {
    if (tab.getAttribute("data-cat") === cat) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  renderResourcesDirectory();
}

function createResourceCardHtml(resource) {
  return `
    <div class="glass-panel glass-panel-interactive" onclick="openArticleModal('${resource.id}')" style="overflow: hidden; border-radius: var(--radius-lg); cursor: pointer; display: flex; flex-direction: column;">
      <div style="position: relative; height: 180px; overflow: hidden;">
        <img src="${resource.image}" alt="${resource.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition-normal);">
        <span class="badge badge-blue" style="position: absolute; top: 12px; left: 12px;">${resource.category}</span>
      </div>
      <div style="padding: 1.5rem; display: flex; flex-direction: column; flex: 1;">
        <span style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.4rem;">${resource.readTime} · By ${resource.author}</span>
        <h3 style="font-size: 1.15rem; font-weight: 700; line-height: 1.35; margin-bottom: 0.75rem;">${resource.title}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">${resource.summary}</p>
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-cyan); display: flex; align-items: center; gap: 0.35rem; margin-top: auto;">
          Read Full Guide <i data-lucide="arrow-right" style="width: 15px; height: 15px;"></i>
        </span>
      </div>
    </div>
  `;
}

function openArticleModal(articleId) {
  const article = AppState.resources.find(r => r.id === articleId);
  if (!article) return;

  document.getElementById("article-modal-category").textContent = article.category;
  document.getElementById("article-modal-title").textContent = article.title;
  document.getElementById("article-modal-meta").textContent = `${article.readTime} · By ${article.author}`;
  document.getElementById("article-modal-image").src = article.image;
  document.getElementById("article-modal-content").textContent = article.content;

  openModal("article-modal");
}

// =============================================================================
// JOB DETAILS MODAL
// =============================================================================

function openJobDetails(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  AppState.activeModalJobId = jobId;

  document.getElementById("modal-job-title").textContent = job.title;
  document.getElementById("modal-job-company").textContent = job.companyName;
  document.getElementById("modal-job-salary-footer").textContent = job.salaryRange;

  const logo = document.getElementById("modal-job-logo");
  logo.textContent = job.companyLetter || "CS";
  logo.style.background = job.companyLogoColor || "#2563EB";

  // Update Save button in modal
  const saveBtn = document.getElementById("modal-job-save-btn");
  if (isJobSaved(job.id)) {
    saveBtn.innerHTML = `<i data-lucide="bookmark-check" style="width: 16px; height: 16px;"></i> Saved`;
  } else {
    saveBtn.innerHTML = `<i data-lucide="bookmark" style="width: 16px; height: 16px;"></i> Save`;
  }

  // Body content
  const body = document.getElementById("modal-job-body");
  const responsibilitiesHtml = job.responsibilities.map(r => `<li style="margin-bottom: 0.4rem;">${r}</li>`).join("");
  const requirementsHtml = job.requirements.map(req => `<li style="margin-bottom: 0.4rem;">${req}</li>`).join("");
  const benefitsHtml = job.benefits.map(b => `<li style="margin-bottom: 0.4rem;">${b}</li>`).join("");
  const skillsHtml = job.skills.map(s => `<span class="skill-pill" style="font-size: 0.8rem; padding: 0.3rem 0.7rem;">${s}</span>`).join("");

  body.innerHTML = `
    <!-- Top Metadata Tags -->
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; font-size: 0.85rem;">
      <span class="badge badge-blue"><i data-lucide="map-pin" style="width: 13px; height: 13px;"></i> ${job.location}</span>
      <span class="badge badge-cyan"><i data-lucide="globe" style="width: 13px; height: 13px;"></i> ${job.workMode}</span>
      <span class="badge badge-emerald"><i data-lucide="briefcase" style="width: 13px; height: 13px;"></i> ${job.jobType}</span>
      <span class="badge badge-violet"><i data-lucide="award" style="width: 13px; height: 13px;"></i> ${job.experience} Level</span>
      <span class="badge badge-amber"><i data-lucide="users" style="width: 13px; height: 13px;"></i> ${job.applicantsCount} Applied</span>
    </div>

    <!-- About the Role -->
    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">About This Role</h4>
      <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem;">${job.description}</p>
    </div>

    <!-- Required Skills -->
    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">Required Technical Stack</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${skillsHtml}
      </div>
    </div>

    <!-- Responsibilities -->
    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem;">Key Responsibilities</h4>
      <ul style="color: var(--text-secondary); padding-left: 1.25rem; line-height: 1.6; font-size: 0.92rem;">
        ${responsibilitiesHtml}
      </ul>
    </div>

    <!-- Requirements -->
    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem;">Qualifications & Requirements</h4>
      <ul style="color: var(--text-secondary); padding-left: 1.25rem; line-height: 1.6; font-size: 0.92rem;">
        ${requirementsHtml}
      </ul>
    </div>

    <!-- Benefits -->
    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem;">Compensation & Perks</h4>
      <ul style="color: var(--text-secondary); padding-left: 1.25rem; line-height: 1.6; font-size: 0.92rem;">
        ${benefitsHtml}
      </ul>
    </div>

    <!-- Share Opportunity Box -->
    <div class="glass-panel" style="padding: 1.25rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; background: rgba(7, 17, 31, 0.5);">
      <div>
        <div style="font-weight: 700; font-size: 0.9rem;">Share this opportunity</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">Recommend a peer or forward to an engineering contact</div>
      </div>
      <button onclick="openShareModal('${job.id}')" class="btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">
        <i data-lucide="share-2" style="width: 14px; height: 14px;"></i> Share Link
      </button>
    </div>
  `;

  openModal("job-details-modal");
  if (window.lucide) window.lucide.createIcons();
}

function toggleModalJobSave() {
  if (AppState.activeModalJobId) {
    toggleSaveJob(AppState.activeModalJobId);
    const saveBtn = document.getElementById("modal-job-save-btn");
    if (isJobSaved(AppState.activeModalJobId)) {
      saveBtn.innerHTML = `<i data-lucide="bookmark-check" style="width: 16px; height: 16px;"></i> Saved`;
    } else {
      saveBtn.innerHTML = `<i data-lucide="bookmark" style="width: 16px; height: 16px;"></i> Save`;
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

function startApplicationFromModal() {
  const jobId = AppState.activeModalJobId;
  closeModal("job-details-modal");
  openApplicationModal(jobId);
}

// =============================================================================
// MULTI-STEP APPLICATION WIZARD (6 STEPS)
// =============================================================================

function openApplicationModal(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  AppState.selectedJobForApplication = job;
  AppState.wizardStep = 1;

  // Pre-fill candidate information
  document.getElementById("app-name").value = AppState.candidate.name;
  document.getElementById("app-email").value = AppState.candidate.email;
  document.getElementById("app-phone").value = AppState.candidate.phone;
  document.getElementById("app-location").value = AppState.candidate.location;

  updateWizardStepView();
  openModal("application-modal");
}

function updateWizardStepView() {
  const step = AppState.wizardStep;
  const progressFill = document.getElementById("wizard-progress-fill");
  const stepLabel = document.getElementById("app-wizard-step-label");
  const title = document.getElementById("app-wizard-title");
  const prevBtn = document.getElementById("wizard-prev-btn");
  const nextBtn = document.getElementById("wizard-next-btn");
  const footer = document.getElementById("app-wizard-footer");

  // Step names
  const stepTitles = [
    "Personal Information",
    "Select Verified Resume",
    "Cover Letter & Notes",
    "Screening Questions",
    "Review Application Summary",
    "Application Submitted!"
  ];

  if (stepLabel) stepLabel.textContent = `Step ${step} of 6`;
  if (title) title.textContent = stepTitles[step - 1];

  // Progress bar percentage
  const percentage = (step / 6) * 100;
  if (progressFill) progressFill.style.width = `${percentage}%`;

  // Hide all step panels
  for (let i = 1; i <= 6; i++) {
    const panel = document.getElementById(`app-step-${i}`);
    if (panel) panel.style.display = (i === step) ? "block" : "none";
  }

  // Button visibility
  if (step === 1) {
    prevBtn.style.visibility = "hidden";
    nextBtn.textContent = "Continue to Resume";
    footer.style.display = "flex";
  } else if (step === 5) {
    prevBtn.style.visibility = "visible";
    nextBtn.textContent = "Submit Candidacy";
    footer.style.display = "flex";
    populateReviewStep();
  } else if (step === 6) {
    footer.style.display = "none";
  } else {
    prevBtn.style.visibility = "visible";
    nextBtn.textContent = "Continue";
    footer.style.display = "flex";
  }

  if (window.lucide) window.lucide.createIcons();
}

function wizardStepNext() {
  if (AppState.wizardStep === 1) {
    const name = document.getElementById("app-name").value.trim();
    const email = document.getElementById("app-email").value.trim();
    if (!name || !email) {
      showToast("Please provide your name and email to proceed", "warning");
      return;
    }
  }

  if (AppState.wizardStep < 5) {
    AppState.wizardStep++;
    updateWizardStepView();
  } else if (AppState.wizardStep === 5) {
    // Submit Application
    finalizeApplicationSubmission();
  }
}

function wizardStepPrev() {
  if (AppState.wizardStep > 1) {
    AppState.wizardStep--;
    updateWizardStepView();
  }
}

function populateReviewStep() {
  const job = AppState.selectedJobForApplication;
  if (!job) return;

  document.getElementById("review-position-name").textContent = job.title;
  document.getElementById("review-company-name").textContent = `${job.companyName} · ${job.location}`;
  document.getElementById("review-cand-name").textContent = document.getElementById("app-name").value;
  document.getElementById("review-cand-email").textContent = document.getElementById("app-email").value;

  const resumeRadio = document.querySelector('input[name="selectedResume"]:checked');
  document.getElementById("review-resume-file").textContent = resumeRadio ? resumeRadio.value : "Default_Resume.pdf";
  document.getElementById("review-notice").textContent = document.getElementById("app-q-notice").value;
  document.getElementById("review-salary").textContent = document.getElementById("app-q-salary").value;
}

function finalizeApplicationSubmission() {
  const job = AppState.selectedJobForApplication;
  if (!job) return;

  const appId = `CS-APP-${Math.floor(10000 + Math.random() * 90000)}`;

  const newApp = {
    id: appId,
    jobId: job.id,
    jobTitle: job.title,
    companyId: job.companyId,
    companyName: job.companyName,
    companyLogoColor: job.companyLogoColor || "#2563EB",
    companyLetter: job.companyLetter || "CS",
    location: job.location,
    salary: job.salaryRange,
    status: "Applied",
    appliedDate: "Just now",
    timeline: [
      { step: "Applied", date: "Today", status: "completed" },
      { step: "Under Review", date: "In Progress", status: "active" },
      { step: "Shortlisted", date: "Pending", status: "pending" },
      { step: "Interview", date: "Pending", status: "pending" },
      { step: "Decision", date: "Pending", status: "pending" }
    ],
    notes: "Application submitted with verified resume and questionnaire answers."
  };

  AppState.applications.unshift(newApp);
  persistState();

  // Populate Step 6 confirmation
  document.getElementById("success-app-id").textContent = appId;
  document.getElementById("success-app-role").textContent = `${job.title} at ${job.companyName}`;

  AppState.wizardStep = 6;
  updateWizardStepView();

  showToast(`Application successfully sent to ${job.companyName}!`, "success");
}

function goToApplicationTracker() {
  closeModal("application-modal");
  navigateTo("candidate-dashboard");
  switchCandidateTab("applications");
}

// =============================================================================
// CANDIDATE DASHBOARD
// =============================================================================

function renderCandidateDashboard() {
  renderCandidateOverview();
  renderCandidateApplications();
  renderCandidateSavedJobs();
  renderCandidateRecommendedJobs();
  renderCandidateResumes();
  renderChatThreads();
  renderActiveChat();
}

function switchCandidateTab(tab) {
  AppState.currentCandidateTab = tab;

  // Update tabs
  document.querySelectorAll(".cand-nav-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tab) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Toggle content panels
  document.querySelectorAll(".cand-tab-content").forEach(content => {
    content.style.display = "none";
  });

  const activeContent = document.getElementById(`cand-tab-${tab}`);
  if (activeContent) activeContent.style.display = "block";

  if (window.lucide) window.lucide.createIcons();
}

function renderCandidateOverview() {
  const container = document.getElementById("cand-overview-apps");
  if (!container) return;

  const top3 = AppState.applications.slice(0, 3);
  container.innerHTML = top3.map(app => `
    <div class="glass-panel" style="padding: 1.25rem; border-radius: var(--radius-md);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="company-logo-box" style="width: 40px; height: 40px; font-size: 0.9rem; background: ${app.companyLogoColor || '#2563EB'};">
            ${app.companyLetter || 'CS'}
          </div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700;">${app.jobTitle}</h4>
            <span style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 600;">${app.companyName}</span>
          </div>
        </div>
        <span class="badge ${getStatusBadgeClass(app.status)}">${app.status}</span>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; justify-content: space-between;">
        <span>Applied on ${app.appliedDate}</span>
        <span>ID: ${app.id}</span>
      </div>
    </div>
  `).join("");

  // Suggestions
  const suggestionsContainer = document.getElementById("cand-suggestions-list");
  if (suggestionsContainer) {
    suggestionsContainer.innerHTML = AppState.candidate.completionSuggestions.map(s => `
      <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
        <i data-lucide="plus-circle" style="width: 15px; height: 15px; color: var(--accent-cyan); flex-shrink: 0; margin-top: 2px;"></i>
        <span>${s}</span>
      </div>
    `).join("");
  }
}

function getStatusBadgeClass(status) {
  if (status === "Interview") return "badge-violet";
  if (status === "Shortlisted") return "badge-cyan";
  if (status === "Under Review") return "badge-amber";
  if (status === "Offer") return "badge-emerald";
  return "badge-blue";
}

function renderCandidateApplications() {
  const container = document.getElementById("cand-full-applications-list");
  if (!container) return;

  let list = AppState.applications;
  if (AppState.currentCandidateAppFilter !== "all") {
    list = list.filter(a => a.status === AppState.currentCandidateAppFilter);
  }

  container.innerHTML = list.map(app => `
    <div class="glass-panel" style="padding: 1.75rem; border-radius: var(--radius-xl);">
      <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="company-logo-box" style="width: 48px; height: 48px; font-size: 1.05rem; background: ${app.companyLogoColor || '#2563EB'};">
            ${app.companyLetter || 'CS'}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <h3 style="font-size: 1.2rem; font-weight: 800;">${app.jobTitle}</h3>
              <span class="badge ${getStatusBadgeClass(app.status)}">${app.status}</span>
            </div>
            <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">${app.companyName} · ${app.location}</span>
          </div>
        </div>

        <div style="font-size: 0.85rem; text-align: right;">
          <div style="font-weight: 700;">${app.salary}</div>
          <div style="color: var(--text-muted); font-size: 0.75rem;">Applied: ${app.appliedDate}</div>
        </div>
      </div>

      <!-- Stepper Timeline -->
      <div style="margin: 2rem 0 1.5rem;">
        <div class="timeline-stepper">
          <div class="timeline-connector">
            <div class="timeline-connector-bar" style="width: ${getTimelineProgress(app.status)}%;"></div>
          </div>
          ${renderTimelineStep("Applied", app.status)}
          ${renderTimelineStep("Under Review", app.status)}
          ${renderTimelineStep("Shortlisted", app.status)}
          ${renderTimelineStep("Interview", app.status)}
          ${renderTimelineStep("Decision", app.status)}
        </div>
      </div>

      <!-- Interview banner if applicable -->
      ${app.interviewDetails ? `
        <div style="background: rgba(124, 58, 237, 0.15); border: 1px solid rgba(124, 58, 237, 0.4); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-top: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="font-weight: 700; font-size: 0.9rem; color: #C084FC;">Upcoming: ${app.interviewDetails.type}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">${app.interviewDetails.date} with ${app.interviewDetails.interviewer}</div>
          </div>
          <a href="${app.interviewDetails.link}" target="_blank" class="btn-gradient" style="padding: 0.45rem 1rem; font-size: 0.85rem;">Join Call</a>
        </div>
      ` : ''}

      ${app.notes ? `
        <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 1rem;">
          <i data-lucide="info" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> Note: ${app.notes}
        </div>
      ` : ''}
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function getTimelineProgress(status) {
  if (status === "Decision") return 100;
  if (status === "Interview") return 75;
  if (status === "Shortlisted") return 50;
  if (status === "Under Review") return 25;
  return 0;
}

function renderTimelineStep(stepName, currentStatus) {
  const stepsOrder = ["Applied", "Under Review", "Shortlisted", "Interview", "Decision"];
  const currentIndex = stepsOrder.indexOf(currentStatus);
  const thisIndex = stepsOrder.indexOf(stepName);

  let stateClass = "pending";
  let icon = thisIndex + 1;

  if (thisIndex < currentIndex) {
    stateClass = "completed";
    icon = `<i data-lucide="check" style="width: 16px; height: 16px;"></i>`;
  } else if (thisIndex === currentIndex) {
    stateClass = "active";
  }

  return `
    <div class="timeline-step ${stateClass}">
      <div class="timeline-step-node">${icon}</div>
      <span class="timeline-step-label" style="font-size: 0.75rem; font-weight: 600; margin-top: 0.5rem; color: ${stateClass === 'active' ? 'var(--accent-cyan)' : 'var(--text-muted)'};">${stepName}</span>
    </div>
  `;
}

function filterCandidateApps(status) {
  AppState.currentCandidateAppFilter = status;
  document.querySelectorAll(".cand-app-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-status") === status) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderCandidateApplications();
}

function renderCandidateSavedJobs() {
  const container = document.getElementById("cand-saved-jobs-grid");
  if (!container) return;

  const savedJobs = AppState.jobs.filter(j => AppState.savedJobIds.has(j.id));
  if (savedJobs.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <p style="color: var(--text-muted);">You have not saved any jobs yet. Bookmark opportunities while browsing!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = savedJobs.map(job => createJobCardHtml(job)).join("");
  if (window.lucide) window.lucide.createIcons();
}

function renderCandidateRecommendedJobs() {
  const container = document.getElementById("cand-recommended-grid");
  if (!container) return;

  // Find jobs matching candidate's top skills
  const recs = AppState.jobs.slice(0, 6);
  container.innerHTML = recs.map(job => {
    return `
      <div class="job-card job-card-featured" style="position: relative;">
        <div style="position: absolute; top: 1rem; right: 1rem;">
          <span class="badge badge-cyan" style="font-size: 0.78rem;">
            <i data-lucide="zap" style="width: 12px; height: 12px;"></i> 96% Match
          </span>
        </div>

        <div style="display: flex; align-items: center; gap: 0.85rem; margin-bottom: 0.85rem;">
          <div class="company-logo-box" style="background: ${job.companyLogoColor || '#2563EB'};">
            ${job.companyLetter || 'CS'}
          </div>
          <div>
            <div style="font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan);">${job.companyName}</div>
            <h3 style="font-size: 1.15rem; font-weight: 700;">${job.title}</h3>
          </div>
        </div>

        <p style="font-size: 0.8rem; color: var(--accent-emerald); margin-bottom: 0.85rem;">
          Matches your React, TypeScript, and Node.js expertise.
        </p>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 0.85rem;">
          <span style="font-weight: 800; font-family: var(--font-display);">${job.salaryRange}</span>
          <div style="display: flex; gap: 0.5rem;">
            <button onclick="openJobDetails('${job.id}')" class="btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">View</button>
            <button onclick="openApplicationModal('${job.id}')" class="btn-gradient" style="padding: 0.4rem 0.95rem; font-size: 0.8rem;">1-Click Apply</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

function saveCandidateProfile(event) {
  event.preventDefault();

  AppState.candidate.name = document.getElementById("prof-name").value;
  AppState.candidate.headline = document.getElementById("prof-headline").value;
  AppState.candidate.email = document.getElementById("prof-email").value;
  AppState.candidate.phone = document.getElementById("prof-phone").value;
  AppState.candidate.location = document.getElementById("prof-location").value;
  AppState.candidate.about = document.getElementById("prof-about").value;

  // Update header text
  document.getElementById("cand-header-name").textContent = AppState.candidate.name;
  document.getElementById("cand-header-headline").textContent = AppState.candidate.headline;

  persistState();
  showToast("Candidate profile successfully updated!", "success");
}

function renderCandidateResumes() {
  const container = document.getElementById("cand-resumes-list");
  if (!container) return;

  container.innerHTML = AppState.resumes.map(r => `
    <div class="glass-panel" style="padding: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="width: 44px; height: 44px; border-radius: var(--radius-sm); background: rgba(37, 99, 235, 0.15); display: flex; align-items: center; justify-content: center; color: var(--primary-blue);">
          <i data-lucide="file-text" style="width: 22px; height: 22px;"></i>
        </div>
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="font-weight: 700; font-size: 0.95rem;">${r.name}</div>
            ${r.isPrimary ? '<span class="badge badge-blue">Primary</span>' : ''}
          </div>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${r.size} · Uploaded ${r.uploadedDate}</span>
        </div>
      </div>

      <div style="display: flex; gap: 0.5rem;">
        <button onclick="previewResumeDocument('${r.name}')" class="btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">
          <i data-lucide="eye" style="width: 14px; height: 14px;"></i> Preview
        </button>
        <button onclick="downloadResumeDocument('${r.name}')" class="btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">
          <i data-lucide="download" style="width: 14px; height: 14px;"></i>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function triggerResumeUpload() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".pdf,.docx";
  input.onchange = e => {
    const file = e.target.files[0];
    if (file) {
      const newResume = {
        id: `res-0${AppState.resumes.length + 1}`,
        name: file.name,
        size: `${Math.round(file.size / 1024)} KB`,
        uploadedDate: "Today",
        isPrimary: false,
        fileType: "PDF"
      };
      AppState.resumes.push(newResume);
      persistState();
      renderCandidateResumes();
      showToast(`Resume "${file.name}" uploaded successfully!`, "success");
    }
  };
  input.click();
}

function previewResumeDocument(fileName) {
  document.getElementById("resume-preview-title").textContent = fileName;
  const content = document.getElementById("resume-preview-content");
  content.innerHTML = `
    <div style="padding: 2rem; border-bottom: 2px solid #e2e8f0; margin-bottom: 1.5rem;">
      <h1 style="font-size: 1.8rem; font-weight: 800; color: #0f172a; margin-bottom: 0.25rem;">${AppState.candidate.name}</h1>
      <p style="font-size: 1rem; color: #2563eb; font-weight: 600;">${AppState.candidate.headline}</p>
      <p style="font-size: 0.85rem; color: #64748b; margin-top: 0.35rem;">
        ${AppState.candidate.email} · ${AppState.candidate.phone} · ${AppState.candidate.location}
      </p>
    </div>

    <div style="padding: 0 2rem 2rem;">
      <h3 style="font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.3rem; margin-bottom: 0.75rem;">Executive Summary</h3>
      <p style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 1.5rem;">${AppState.candidate.about}</p>

      <h3 style="font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.3rem; margin-bottom: 0.75rem;">Core Competencies</h3>
      <p style="font-size: 0.9rem; color: #334155; margin-bottom: 1.5rem;">
        React, TypeScript, Next.js, Node.js, Tailwind CSS, GraphQL, Distributed Architecture, Docker, AWS.
      </p>

      <h3 style="font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.3rem; margin-bottom: 0.75rem;">Experience Highlights</h3>
      <div style="margin-bottom: 1rem;">
        <div style="font-weight: 700; color: #0f172a;">Senior Frontend Developer — Vanguard Tech Labs (2023 - Present)</div>
        <div style="font-size: 0.85rem; color: #64748b;">Led Next.js 14 dashboard migration resulting in a 48% LCP reduction and sub-100ms render speeds.</div>
      </div>
      <div>
        <div style="font-weight: 700; color: #0f172a;">Frontend Engineer — CloudScale Systems (2020 - 2023)</div>
        <div style="font-size: 0.85rem; color: #64748b;">Architected 40+ accessible WCAG AAA component design system used by 12 cross-functional teams.</div>
      </div>
    </div>
  `;
  openModal("resume-preview-modal");
}

function downloadResumeDocument(fileName) {
  showToast(`Downloading "${fileName}"...`, "info");
}

// =============================================================================
// RECRUITER & CANDIDATE MESSAGING
// =============================================================================

function renderChatThreads() {
  const container = document.getElementById("chat-thread-list");
  if (!container) return;

  container.innerHTML = AppState.conversations.map(conv => {
    const isActive = conv.id === AppState.activeConversationId;
    const lastMsg = conv.messages[conv.messages.length - 1];

    return `
      <div onclick="selectChatThread('${conv.id}')" style="padding: 0.85rem 1rem; border-bottom: 1px solid var(--border-subtle); cursor: pointer; background: ${isActive ? 'rgba(37, 99, 235, 0.15)' : 'transparent'}; border-left: ${isActive ? '3px solid var(--primary-blue)' : 'none'}; display: flex; align-items: center; gap: 0.75rem;">
        <div style="position: relative;">
          <img src="${conv.participantAvatar}" alt="${conv.participantName}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
          ${conv.online ? '<span style="position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--accent-emerald); border: 2px solid var(--bg-surface);"></span>' : ''}
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-weight: 700; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${conv.participantName}</span>
            <span style="font-size: 0.7rem; color: var(--text-muted);">${conv.companyName.split(' ')[0]}</span>
          </div>
          <p style="font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 0.2rem;">
            ${lastMsg ? lastMsg.text : 'No messages yet'}
          </p>
        </div>
      </div>
    `;
  }).join("");
}

function selectChatThread(convId) {
  AppState.activeConversationId = convId;
  renderChatThreads();
  renderActiveChat();
}

function renderActiveChat() {
  const conv = AppState.conversations.find(c => c.id === AppState.activeConversationId);
  if (!conv) return;

  document.getElementById("chat-active-name").textContent = conv.participantName;
  document.getElementById("chat-active-title").textContent = conv.participantTitle;
  document.getElementById("chat-active-avatar").src = conv.participantAvatar;

  const messagesBody = document.getElementById("chat-messages-body");
  if (!messagesBody) return;

  messagesBody.innerHTML = conv.messages.map(m => {
    const isUser = m.sender === "user";
    return `
      <div style="display: flex; flex-direction: column; align-items: ${isUser ? 'flex-end' : 'flex-start'};">
        <div class="${isUser ? 'chat-bubble-user' : 'chat-bubble-other'}">
          ${m.text}
        </div>
        <span style="font-size: 0.7rem; color: var(--text-muted); margin-top: 0.25rem; padding: 0 0.5rem;">${m.timestamp}</span>
      </div>
    `;
  }).join("");

  messagesBody.scrollTop = messagesBody.scrollHeight;
}

function sendChatMessage(event) {
  event.preventDefault();
  const input = document.getElementById("chat-input-text");
  const text = input.value.trim();
  if (!text) return;

  const conv = AppState.conversations.find(c => c.id === AppState.activeConversationId);
  if (!conv) return;

  const userMsg = {
    id: `m-${Date.now()}`,
    sender: "user",
    text: text,
    timestamp: "Just now"
  };

  conv.messages.push(userMsg);
  input.value = "";
  persistState();
  renderActiveChat();
  renderChatThreads();

  // Simulated Recruiter Reply after 1.5s
  setTimeout(() => {
    const replies = [
      "Thanks for providing that detail, Alex! I've updated the notes for the engineering interview panel.",
      "Sounds great! Looking forward to our technical conversation.",
      "Understood. Our team will review the repository examples you provided."
    ];
    const replyText = replies[Math.floor(Math.random() * replies.length)];
    const replyMsg = {
      id: `m-${Date.now() + 1}`,
      sender: "other",
      text: replyText,
      timestamp: "Just now"
    };
    conv.messages.push(replyMsg);
    persistState();
    renderActiveChat();
    renderChatThreads();
    showToast(`New message from ${conv.participantName}`, "info");
  }, 1400);
}

// =============================================================================
// EMPLOYER DASHBOARD & RECRUITMENT ANALYTICS
// =============================================================================

function renderEmployerDashboard() {
  renderEmployerOverview();
  renderEmployerCandidates();
  renderEmployerJobs();
  updateLiveJobPreview();
}

function switchEmployerTab(tab) {
  AppState.currentEmployerTab = tab;

  document.querySelectorAll(".emp-nav-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tab) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".emp-tab-content").forEach(content => {
    content.style.display = "none";
  });

  const active = document.getElementById(`emp-tab-${tab}`);
  if (active) active.style.display = "block";

  if (tab === "overview") {
    renderAnalyticsChart();
  }

  if (window.lucide) window.lucide.createIcons();
}

function setAnalyticsTimeframe(tf) {
  AppState.analyticsTimeframe = tf;
  document.querySelectorAll(".analytics-time-btn").forEach(btn => {
    if (btn.getAttribute("data-time") === tf) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderEmployerOverview();
}

function renderEmployerOverview() {
  const data = AppState.employer.analytics[AppState.analyticsTimeframe];
  if (!data) return;

  document.getElementById("emp-stat-apps").textContent = data.applicationsCount;
  document.getElementById("emp-stat-short").textContent = data.shortlistedCount;
  document.getElementById("emp-stat-interviews").textContent = data.interviewsCount;
  document.getElementById("emp-stat-conversion").textContent = data.conversionRate;

  renderAnalyticsChart();
  renderSourceChannels();
}

function renderAnalyticsChart() {
  const container = document.getElementById("analytics-chart-container");
  const labelsContainer = document.getElementById("analytics-labels-container");
  if (!container) return;

  const data = AppState.employer.analytics[AppState.analyticsTimeframe];
  if (!data) return;

  const maxVal = Math.max(...data.applicationsTimeline, 1);

  container.innerHTML = data.applicationsTimeline.map((val, idx) => {
    const heightPercent = Math.round((val / maxVal) * 100);
    return `
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; height: 100%; justify-content: flex-end;">
        <span style="font-size: 0.72rem; font-weight: 700; color: var(--accent-cyan);">${val}</span>
        <div style="width: 100%; max-width: 48px; height: ${heightPercent}%; background: var(--gradient-blue-cyan); border-radius: 6px 6px 0 0; transition: height 0.4s ease-out; box-shadow: 0 0 12px rgba(6, 182, 212, 0.35);"></div>
      </div>
    `;
  }).join("");

  if (labelsContainer) {
    labelsContainer.innerHTML = data.timelineLabels.map(l => `<span>${l}</span>`).join("");
  }
}

function renderSourceChannels() {
  const container = document.getElementById("analytics-sources-container");
  if (!container) return;

  const data = AppState.employer.analytics[AppState.analyticsTimeframe];
  if (!data) return;

  container.innerHTML = data.sources.map(s => `
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.3rem;">
        <span style="font-weight: 600;">${s.name}</span>
        <span style="color: var(--accent-cyan); font-weight: 700;">${s.percentage}%</span>
      </div>
      <div style="height: 6px; background: var(--border-subtle); border-radius: var(--radius-full); overflow: hidden;">
        <div style="width: ${s.percentage}%; height: 100%; background: var(--gradient-blue-cyan);"></div>
      </div>
    </div>
  `).join("");
}

function renderEmployerCandidates() {
  const container = document.getElementById("emp-candidates-list");
  if (!container) return;

  let list = AppState.employer.candidates;
  if (AppState.currentEmployerCandFilter !== "all") {
    list = list.filter(c => c.status === AppState.currentEmployerCandFilter);
  }

  container.innerHTML = list.map(c => `
    <div class="glass-panel" style="padding: 1.5rem; border-radius: var(--radius-lg); display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 0.75rem;">
          <div>
            <h4 style="font-size: 1.15rem; font-weight: 700;">${c.name}</h4>
            <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">${c.role}</span>
          </div>
          <span class="badge badge-emerald" style="font-size: 0.75rem;">
            <i data-lucide="zap" style="width: 12px; height: 12px;"></i> ${c.matchScore}% Match
          </span>
        </div>

        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          ${c.location} · ${c.experience} Exp · Applied for <strong>${c.appliedFor}</strong>
        </div>

        <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
          ${c.matchRationale}
        </p>

        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
          ${c.skills.map(s => `<span class="skill-pill">${s}</span>`).join("")}
        </div>
      </div>

      <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
        <button onclick="previewResumeDocument('${c.resumeFileName}')" class="btn-secondary" style="padding: 0.4rem 0.75rem; font-size: 0.8rem;">
          <i data-lucide="file-text" style="width: 14px; height: 14px;"></i> CV
        </button>

        <div style="display: flex; gap: 0.4rem;">
          ${c.status !== 'Shortlisted' ? `
            <button onclick="shortlistCandidate('${c.id}')" class="btn-secondary" style="padding: 0.4rem 0.75rem; font-size: 0.8rem;">Shortlist</button>
          ` : ''}
          <button onclick="openScheduleInterviewModal('${c.id}')" class="btn-gradient" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">
            <i data-lucide="calendar" style="width: 14px; height: 14px;"></i> Schedule
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function filterEmployerCandidates(status) {
  AppState.currentEmployerCandFilter = status;
  document.querySelectorAll(".emp-cand-btn").forEach(btn => {
    if (btn.getAttribute("data-status") === status) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderEmployerCandidates();
}

function shortlistCandidate(candId) {
  const cand = AppState.employer.candidates.find(c => c.id === candId);
  if (cand) {
    cand.status = "Shortlisted";
    persistState();
    renderEmployerCandidates();
    showToast(`Candidate ${cand.name} shortlisted!`, "success");
  }
}

function openScheduleInterviewModal(candId) {
  const cand = AppState.employer.candidates.find(c => c.id === candId);
  if (!cand) return;

  AppState.activeSchedulingCandId = candId;
  document.getElementById("sched-candidate-name").value = `${cand.name} (${cand.appliedFor})`;
  openModal("scheduler-modal");
}

function confirmScheduleInterview() {
  const cand = AppState.employer.candidates.find(c => c.id === AppState.activeSchedulingCandId);
  if (!cand) return;

  const stage = document.getElementById("sched-type").value;
  const date = document.getElementById("sched-date").value;
  const time = document.getElementById("sched-time").value;
  const link = document.getElementById("sched-link").value;

  cand.status = "Interview";
  persistState();

  closeModal("scheduler-modal");
  renderEmployerCandidates();
  showToast(`Interview scheduled with ${cand.name} on ${date} at ${time}! Invitation dispatched.`, "success");
}

function renderEmployerJobs() {
  const container = document.getElementById("emp-jobs-list");
  if (!container) return;

  container.innerHTML = AppState.employer.activeJobs.map(job => `
    <div class="glass-panel" style="padding: 1.5rem; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.25rem;">
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <h4 style="font-size: 1.2rem; font-weight: 700;">${job.title}</h4>
          <span class="badge ${job.status === 'Active' ? 'badge-emerald' : 'badge-amber'}">${job.status}</span>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${job.department} · ${job.location} · ${job.type} · ${job.salary}
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 1.5rem;">
        <div style="text-align: right;">
          <span style="font-size: 1.3rem; font-weight: 800; font-family: var(--font-display);">${job.applicantsCount}</span>
          <span style="display: block; font-size: 0.75rem; color: var(--text-muted);">Applicants (${job.shortlistedCount} shortlisted)</span>
        </div>

        <div style="display: flex; gap: 0.5rem;">
          <button onclick="switchEmployerTab('candidates')" class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View Pipeline</button>
          <button onclick="toggleJobStatus('${job.id}')" class="btn-secondary" style="padding: 0.5rem 0.85rem; font-size: 0.85rem;">
            ${job.status === 'Active' ? 'Pause' : 'Activate'}
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function toggleJobStatus(jobId) {
  const job = AppState.employer.activeJobs.find(j => j.id === jobId);
  if (job) {
    job.status = job.status === "Active" ? "Paused" : "Active";
    persistState();
    renderEmployerJobs();
    showToast(`Job listing "${job.title}" is now ${job.status}`, "info");
  }
}

// =============================================================================
// POST A JOB (WITH REAL-TIME PREVIEW)
// =============================================================================

function updateLiveJobPreview() {
  const title = document.getElementById("post-title") ? document.getElementById("post-title").value : "Staff Systems & Cloud Architect";
  const dept = document.getElementById("post-dept") ? document.getElementById("post-dept").value : "Infrastructure";
  const location = document.getElementById("post-location") ? document.getElementById("post-location").value : "San Francisco, CA / Remote";
  const mode = document.getElementById("post-mode") ? document.getElementById("post-mode").value : "Remote";
  const type = document.getElementById("post-type") ? document.getElementById("post-type").value : "Full-time";
  const minSal = document.getElementById("post-salary-min") ? document.getElementById("post-salary-min").value : "180000";
  const maxSal = document.getElementById("post-salary-max") ? document.getElementById("post-salary-max").value : "240000";
  const skillsStr = document.getElementById("post-skills") ? document.getElementById("post-skills").value : "Kubernetes, Go, AWS";
  const desc = document.getElementById("post-desc") ? document.getElementById("post-desc").value : "";

  const skillsArr = skillsStr.split(",").map(s => s.trim()).filter(Boolean);
  const skillsHtml = skillsArr.map(s => `<span class="skill-pill">${s}</span>`).join("");

  const previewCard = document.getElementById("live-preview-card");
  if (!previewCard) return;

  previewCard.innerHTML = `
    <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.85rem;">
        <div class="company-logo-box" style="background: #2563EB;">TN</div>
        <div>
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan);">TechNova Systems · ${dept}</span>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-top: 0.15rem;">${title || 'Untitled Position'}</h3>
        </div>
      </div>
      <span class="badge badge-emerald">New Post</span>
    </div>

    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; font-size: 0.8rem;">
      <span class="badge badge-blue">${location}</span>
      <span class="badge badge-cyan">${mode}</span>
      <span class="badge badge-violet">${type}</span>
    </div>

    <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
      ${desc}
    </p>

    <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
      ${skillsHtml}
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 0.85rem;">
      <span style="font-weight: 800; font-family: var(--font-display);">$${parseInt(minSal, 10).toLocaleString()} – $${parseInt(maxSal, 10).toLocaleString()}</span>
      <button class="btn-gradient" style="padding: 0.4rem 1rem; font-size: 0.82rem;">Apply Now</button>
    </div>
  `;
}

function submitNewJob(event) {
  event.preventDefault();

  const title = document.getElementById("post-title").value;
  const dept = document.getElementById("post-dept").value;
  const location = document.getElementById("post-location").value;
  const mode = document.getElementById("post-mode").value;
  const type = document.getElementById("post-type").value;
  const minSal = parseInt(document.getElementById("post-salary-min").value, 10);
  const maxSal = parseInt(document.getElementById("post-salary-max").value, 10);
  const skillsStr = document.getElementById("post-skills").value;
  const desc = document.getElementById("post-desc").value;

  const newJobId = `job-custom-${Date.now()}`;
  const skills = skillsStr.split(",").map(s => s.trim()).filter(Boolean);

  const newJob = {
    id: newJobId,
    title: title,
    companyId: "comp-technova",
    companyName: "TechNova Systems",
    companyLogoColor: "#2563EB",
    companyLetter: "TN",
    location: location,
    workMode: mode,
    jobType: type,
    salaryRange: `$${minSal.toLocaleString()} - $${maxSal.toLocaleString()}`,
    minSalary: minSal,
    maxSalary: maxSal,
    experience: "Lead",
    postedDate: "Just now",
    featured: true,
    category: "Engineering",
    industry: "Technology",
    skills: skills,
    applicantsCount: 0,
    description: desc,
    responsibilities: [
      "Drive distributed architectural standards across engineering teams.",
      "Lead cross-functional technical initiatives with reliability and zero downtime."
    ],
    requirements: [
      "Extensive production experience in distributed cloud services.",
      "Proficiency in modern container orchestration and systems engineering."
    ],
    benefits: [
      "100% remote flexibility with modern home lab grant",
      "Full family health, dental, and retirement matching"
    ]
  };

  AppState.jobs.unshift(newJob);

  AppState.employer.activeJobs.unshift({
    id: newJobId,
    title: title,
    department: dept,
    location: location,
    workMode: mode,
    type: type,
    salary: `$${minSal.toLocaleString()} - $${maxSal.toLocaleString()}`,
    applicantsCount: 0,
    shortlistedCount: 0,
    status: "Active",
    postedDate: "Just now"
  });

  persistState();

  showToast(`Job listing "${title}" has been published to CareerSphere!`, "success");
  switchEmployerTab("jobs");
}

function saveJobDraft() {
  showToast("Draft saved successfully to recruiter workspace", "info");
}

function openPostJobModal() {
  navigateTo("employer-dashboard");
  switchEmployerTab("post");
}

// =============================================================================
// NOTIFICATIONS FLYOUT
// =============================================================================

function toggleNotifDropdown(event) {
  if (event) event.stopPropagation();
  const flyout = document.getElementById("notif-flyout");
  if (flyout.style.display === "block") {
    flyout.style.display = "none";
  } else {
    flyout.style.display = "block";
    renderNotifications();
  }
}

document.addEventListener("click", () => {
  const flyout = document.getElementById("notif-flyout");
  if (flyout && flyout.style.display === "block") {
    flyout.style.display = "none";
  }
});

function renderNotifications() {
  const container = document.getElementById("notif-list-container");
  const badge = document.getElementById("notif-badge");
  if (!container) return;

  const unreadCount = AppState.notifications.filter(n => n.unread).length;
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? "inline-flex" : "none";
  }

  container.innerHTML = AppState.notifications.map(n => `
    <div style="padding: 0.75rem; border-radius: var(--radius-sm); background: ${n.unread ? 'rgba(37, 99, 235, 0.12)' : 'transparent'}; border-left: ${n.unread ? '3px solid var(--primary-blue)' : 'none'}; font-size: 0.82rem;">
      <div style="font-weight: 700; color: var(--text-primary);">${n.title}</div>
      <div style="color: var(--text-secondary); margin: 0.2rem 0;">${n.body}</div>
      <div style="font-size: 0.7rem; color: var(--text-muted);">${n.time}</div>
    </div>
  `).join("");
}

function markAllNotifsRead() {
  AppState.notifications.forEach(n => n.unread = false);
  persistState();
  renderNotifications();
  showToast("All notifications marked as read", "info");
}

// =============================================================================
// SHARE & AUTH MODALS
// =============================================================================

function openShareModal(jobId) {
  const shareInput = document.getElementById("share-link-input");
  if (shareInput) {
    shareInput.value = `https://careersphere.io/jobs/${jobId}`;
  }
  openModal("share-modal");
}

function copyShareLink() {
  const shareInput = document.getElementById("share-link-input");
  if (shareInput) {
    navigator.clipboard.writeText(shareInput.value);
    showToast("Opportunity link copied to clipboard!", "success");
    closeModal("share-modal");
  }
}

function openAuthModal() {
  openModal("auth-modal");
}

function setAuthRole(role) {
  AppState.authRole = role;
  const candBtn = document.getElementById("auth-role-cand");
  const empBtn = document.getElementById("auth-role-emp");
  if (role === "candidate") {
    candBtn.classList.add("active");
    empBtn.classList.remove("active");
  } else {
    empBtn.classList.add("active");
    candBtn.classList.remove("active");
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  closeModal("auth-modal");
  if (AppState.authRole === "candidate") {
    navigateTo("candidate-dashboard");
    showToast("Signed in as Alex Morgan (Candidate)", "success");
  } else {
    navigateTo("employer-dashboard");
    showToast("Signed in as TechNova Systems Recruiter", "success");
  }
}

// =============================================================================
// MODAL HELPERS
// =============================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function closeModalOnBackdrop(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

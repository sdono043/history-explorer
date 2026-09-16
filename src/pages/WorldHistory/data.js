export const ERAS = [
  { id: 'postwar',   label: 'Post-War Order',      years: [1945, 1955], color: '#4a6fa5' },
  { id: 'coldwar',   label: 'Cold War Peak',        years: [1955, 1975], color: '#8b1a1a' },
  { id: 'detente',   label: 'Détente & Shocks',     years: [1975, 1991], color: '#c9a050' },
  { id: 'unipolar',  label: 'Unipolar Moment',      years: [1991, 2008], color: '#2a5c45' },
  { id: 'multipolar',label: 'Multipolar Fracture',  years: [2008, 2026], color: '#6b3fa0' },
];

export const START_YEAR = 1945;
export const END_YEAR   = 2026;

export const COUNTRIES = [
  { id: 'usa',     label: 'United States',  colors: ['#1a4a7a', '#2d6aa0'], startYear: 1945 },
  { id: 'russia',  label: 'USSR / Russia',  colors: ['#7a1414', '#a02020'], startYear: 1945 },
  { id: 'china',   label: 'China (PRC)',    colors: ['#8a4400', '#b05a00'], startYear: 1949 },
  { id: 'uk',      label: 'United Kingdom', colors: ['#3d2560', '#5c3d8a'], startYear: 1945 },
  { id: 'germany', label: 'Germany',        colors: ['#1a3f28', '#2a5c3a'], startYear: 1949 },
];

// FIGURES — heads of state have a `country` field (shown in country rows).
// Diplomats/advisors have no `country` field (list only).
export const FIGURES = [

  // ── UNITED STATES ───────────────────────────────────────────────────
  { id: 'usa1', name: 'Truman',       short: 'Truman',    role: 'US President',  country: 'usa', years: [1945, 1953],
    detail: 'Truman presided over the most consequential foreign policy decisions of the post-war founding: the atomic bombing of Japan, the Marshall Plan, NATO, the containment doctrine, and Korea. A former senator with no foreign policy experience, he relied on Dean Acheson and George Marshall — the team that produced the most strategically coherent US foreign policy of the 20th century. His choices locked in the institutional architecture that persisted for 80 years.' },

  { id: 'usa2', name: 'Eisenhower',   short: 'Ike',       role: 'US President',  country: 'usa', years: [1953, 1961],
    detail: 'Eisenhower\'s "New Look" strategy substituted nuclear deterrence for expensive conventional forces, freeing budget for domestic investment. He ended the Korean War, resisted military pressure to intervene in Vietnam, and in his farewell address warned of the "military-industrial complex" — the most prescient exit speech of any president. He also covertly overthrew Mossadegh in Iran (1953) and Arbenz in Guatemala (1954), planting seeds of future crises.' },

  { id: 'usa3', name: 'Kennedy',      short: 'JFK',       role: 'US President',  country: 'usa', years: [1961, 1963],
    detail: 'Kennedy\'s 1000 days produced the most dangerous moment of the Cold War (Cuban Missile Crisis) and its most successful resolution. His management of the crisis — resisting military pressure for airstrikes, running back-channel communications through his brother — established the template for nuclear crisis management. His assassination created a Vietnam decision vacuum; Johnson, lacking Kennedy\'s confidence to withdraw, escalated.' },

  { id: 'usa4', name: 'L.B. Johnson', short: 'LBJ',       role: 'US President',  country: 'usa', years: [1963, 1969],
    detail: 'LBJ\'s Great Society was arguably the most transformative domestic program since the New Deal: Medicare, Medicaid, the Voting Rights Act, and the Civil Rights Act. But his Vietnam escalation destroyed his presidency and his coalition. He refused to raise taxes to fund both guns and butter, triggering the inflation that eventually killed Bretton Woods. The tragic paradox of LBJ: his domestic ambition required foreign policy restraint he could not muster.' },

  { id: 'usa5', name: 'Nixon',        short: 'Nixon',     role: 'US President',  country: 'usa', years: [1969, 1974],
    detail: 'Nixon produced the most consequential strategic repositioning in American Cold War history: opening China, détente with the USSR, and — via Kissinger — the petrodollar system that underwrote dollar hegemony for 50 years. He also ended the Bretton Woods gold standard (1971) and pulled US troops from Vietnam. His Watergate resignation remains the deepest constitutional crisis in US history, but his foreign policy legacy is durable and complex.' },

  { id: 'usa6', name: 'Ford',         short: 'Ford',      role: 'US President',  country: 'usa', years: [1974, 1977],
    detail: 'Gerald Ford entered office without ever having been elected to either the presidency or vice-presidency, the only person in US history to do so. His pardon of Nixon cost him the 1976 election but arguably helped the country move past Watergate. He oversaw the final chaotic withdrawal from Vietnam (April 1975) and the Helsinki Accords, which formally ratified European borders — a long-term boost for Eastern European human rights movements.' },

  { id: 'usa7', name: 'Carter',       short: 'Carter',    role: 'US President',  country: 'usa', years: [1977, 1981],
    detail: 'Carter\'s presidency is defined by its failures (Iranian hostage crisis, stagflation, Soviet invasion of Afghanistan) but his achievements are underrated: the Camp David Accords (the only durable Arab-Israeli peace deal), the Panama Canal Treaty, and the Carter Doctrine (Persian Gulf security guarantee). His human rights foreign policy marked a departure from Kissinger\'s realpolitik. The CIA\'s covert arming of Afghan mujahideen began under Carter, not Reagan.' },

  { id: 'usa8', name: 'Reagan',       short: 'Reagan',    role: 'US President',  country: 'usa', years: [1981, 1989],
    detail: 'Reagan\'s defense buildup ($2T over 8 years), SDI program, and Reagan Doctrine of arming anti-communist insurgencies (Afghanistan, Nicaragua, Angola) accelerated Soviet overextension. His supply-side economics and deregulation reshaped US domestic political economy. Whether he "won" the Cold War or merely outlasted it is debated, but the USSR collapsed while his framework was still operating. Iran-Contra revealed the limits of covert executive action.' },

  { id: 'usa9', name: 'Bush 41',      short: 'Bush 41',   role: 'US President',  country: 'usa', years: [1989, 1993],
    detail: 'Bush 41 managed the most consequential period of post-war geopolitics with extraordinary skill: German reunification, the Gulf War coalition (34 nations), and the Soviet dissolution — all without triggering the great-power conflicts that history would have predicted. His "New World Order" speech articulated a vision of multilateral governance that his successors failed to sustain. Widely considered the most competent foreign policy president of the post-war era.' },

  { id: 'usa10', name: 'Clinton',     short: 'Clinton',   role: 'US President',  country: 'usa', years: [1993, 2001],
    detail: 'Clinton\'s presidency coincided with the "unipolar moment" — unchallenged US power, the dotcom boom, and globalization\'s acceleration. NAFTA, WTO, China\'s MFN status, and NATO expansion (without adequate planning for Russia\'s reaction) were his major moves. His failure to intervene in Rwanda (800K dead) and the botched Somalia intervention (Black Hawk Down) shaped his caution on military force. His impeachment previewed the polarization to come.' },

  { id: 'usa11', name: 'Bush 43',     short: 'Bush 43',   role: 'US President',  country: 'usa', years: [2001, 2009],
    detail: 'Bush 43\'s presidency was defined by 9/11 and the "War on Terror." The Afghanistan and Iraq invasions consumed American strategic attention, treasure ($8T), and credibility for 20 years. The Iraq War — sold on false WMD premises — ranks among the costliest strategic miscalculations in American history. Simultaneously, his administration oversaw the 2008 financial crisis (deregulation legacy), China\'s WTO integration, and the beginning of US-China strategic competition.' },

  { id: 'usa12', name: 'Obama',       short: 'Obama',     role: 'US President',  country: 'usa', years: [2009, 2017],
    detail: 'Obama\'s presidency confronted the aftermath of the financial crisis, managed the Arab Spring, killed bin Laden, negotiated the Iran nuclear deal (JCPOA), and announced the "Pivot to Asia" — all while domestic polarization deepened. His restraint in Syria (red line not enforced) damaged US credibility; his TPP trade agreement (designed to counter China) was abandoned by his successor. The Obama era marks the end of unipolar confidence.' },

  { id: 'usa13', name: 'Trump',       short: 'Trump',     role: 'US President',  country: 'usa', years: [2017, 2021],
    detail: 'Trump\'s first term disrupted the post-war institutional architecture: withdrew from TPP, the Paris Agreement, the Iran nuclear deal, and questioned NATO\'s Article 5 commitment. His tariff war with China was the most aggressive US trade intervention since Smoot-Hawley. Whether his disruption was strategic (forcing burden-sharing, confronting China) or destructive (weakening alliances) remains the central debate of his legacy.' },

  { id: 'usa14', name: 'Biden',       short: 'Biden',     role: 'US President',  country: 'usa', years: [2021, 2025],
    detail: 'Biden restored US participation in multilateral institutions (Paris, WHO, NATO) while maintaining most Trump-era China tariffs and extending semiconductor export controls — revealing bipartisan consensus that managed interdependence with China was a mistake. His signature legislation (IRA, CHIPS Act) represented the largest US industrial policy since WWII. Managing the Ukraine war response and his own political viability defined his term\'s second half.' },

  { id: 'usa15', name: 'Trump',       short: 'Trump',     role: 'US President',  country: 'usa', years: [2025, 2026],
    detail: 'Trump\'s second term has re-opened all the questions of the first at higher intensity: tariffs extended to nearly all trading partners (triggering global market volatility), NATO burden-sharing demands hardened, and the Ukraine war ceasefire framework shifted US posture. The strategic question is whether the reassertion of "America First" produces durable realignment of allies and adversaries, or a temporary disruption that the next administration reverses.' },

  // ── USSR / RUSSIA ───────────────────────────────────────────────────
  { id: 'ru1', name: 'Stalin',        short: 'Stalin',    role: 'Soviet Premier', country: 'russia', years: [1945, 1953],
    detail: 'Stalin\'s post-war strategy was defensive in motivation (he feared a rearmed Germany) but expansionist in effect — imposing Soviet-dominated governments across Eastern Europe. His death in 1953 triggered a power struggle. Stalin\'s paranoia killed millions of Soviet citizens even as he built the USSR into a superpower. His insistence on controlling Eastern European buffer states made the Cold War division of Europe essentially permanent for 45 years.' },

  { id: 'ru2', name: 'Khrushchev',   short: 'Khrushchev', role: 'Soviet Premier', country: 'russia', years: [1953, 1964],
    detail: 'Khrushchev\'s "Secret Speech" denouncing Stalin\'s crimes (1956) partially liberated the Soviet system, but his erratic temperament created crises (Berlin, Cuba) that nearly ended civilization. He backed down in the Cuban Missile Crisis when confronted with US naval power — a humiliation that led to his ouster. The Soviets resolved never again to be at such a strategic disadvantage, fueling the arms buildup that nearly bankrupted the Soviet economy over the next 25 years.' },

  { id: 'ru3', name: 'Brezhnev',     short: 'Brezhnev',  role: 'Soviet Premier', country: 'russia', years: [1964, 1982],
    detail: 'Brezhnev\'s 18-year tenure is synonymous with stagnation (zastoi) — a period of rising oil revenues masking structural economic decay. The Brezhnev Doctrine (1968) asserted the USSR\'s right to intervene in socialist states, justified by the crushing of the Prague Spring. His détente with Nixon produced arms control treaties (SALT I, II) but the 1979 Afghan invasion shattered détente and triggered the Reagan military buildup that accelerated Soviet bankruptcy.' },

  { id: 'ru4', name: 'Andropov',     short: 'Andropov',  role: 'Soviet Premier', country: 'russia', years: [1982, 1984],
    detail: 'Former KGB chief Yuri Andropov succeeded Brezhnev with a reform agenda — attacking corruption and inefficiency — but died after 15 months in office, too ill to govern for much of that time. His brief tenure is historically notable mainly for the 1983 Korean Air Lines shootdown (KAL 007) which nearly triggered armed conflict, and for being the last of the "Old Guard" who still believed Soviet-style reform was possible without systemic change.' },

  { id: 'ru5', name: 'Chernenko',    short: 'Chernenko', role: 'Soviet Premier', country: 'russia', years: [1984, 1985],
    detail: 'Konstantin Chernenko, 72 and already ill when he took power, died after just 13 months — the third Soviet leader to die in office in three years. His tenure represented the last gasp of the Brezhnev-era old guard. Western leaders, exhausted by attending Soviet state funerals, privately noted that the USSR\'s gerontocracy was becoming a strategic liability. His death brought Gorbachev, then 54, to power and opened the reform era.' },

  { id: 'ru6', name: 'Gorbachev',    short: 'Gorbachev', role: 'Soviet Premier', country: 'russia', years: [1985, 1991],
    detail: 'Gorbachev\'s Glasnost (openness) and Perestroika (restructuring) were intended to save the Soviet system by reforming it — instead, they unraveled it. His refusal to use force to suppress Eastern European revolutions (unlike 1956 Hungary, 1968 Czechoslovakia) allowed the peaceful dissolution of the Warsaw Pact. Whether this was strategic vision or loss of control is the central question of his legacy. He died in 2022, living to see Russia attempt to reverse the post-Cold War order.' },

  { id: 'ru7', name: 'Yeltsin',      short: 'Yeltsin',   role: 'Russian President', country: 'russia', years: [1991, 1999],
    detail: 'Yeltsin presided over the chaotic transition from Soviet command economy to market capitalism under the "Washington Consensus" shock therapy. Mass privatization transferred state assets to a small number of "oligarchs" at pennies on the dollar. GDP fell ~40%, life expectancy dropped, and organized crime exploded. Two brutal Chechen wars (1994-96, 1999) revealed Russian military weakness. His New Year\'s Eve 1999 resignation, handing power to his FSB chief Vladimir Putin, shaped the next 25 years.' },

  { id: 'ru8', name: 'Putin',        short: 'Putin',     role: 'Russian President', country: 'russia', years: [1999, 2008],
    detail: 'Putin\'s first two terms (1999-2008) rode an oil price boom to restore Russian economic stability and project renewed confidence. He centralized media, marginalized oligarchs who wouldn\'t comply, and established the Siloviki (security services) as the dominant political class. The 2008 Georgia war signaled a willingness to use military force to contest post-Soviet borders — a preview of Ukraine 2014 and 2022. He framed his project as reversing Russia\'s post-Soviet humiliation.' },

  { id: 'ru9', name: 'Medvedev',     short: 'Medvedev',  role: 'Russian President', country: 'russia', years: [2008, 2012],
    detail: 'Dmitry Medvedev served as president while Putin served as prime minister — a "tandem" arrangement that preserved Putin\'s power while technically complying with constitutional term limits. He pursued a "reset" with the Obama administration and authorized Russia\'s WTO accession. His presidency is now widely understood as a placeholder; the announcement in 2011 that Putin would return to the presidency triggered the largest anti-government protests since the 1990s.' },

  { id: 'ru10', name: 'Putin',       short: 'Putin',     role: 'Russian President', country: 'russia', years: [2012, 2026],
    detail: 'Putin\'s return marked a decisive hardening of Russian policy. Crimea annexation (2014), Donbas intervention (2014-22), Syria intervention (2015), US election interference (2016), and the full-scale Ukraine invasion (2022) represent a systematic challenge to the post-Cold War European order. Western sanctions — including the historic freezing of Russian central bank reserves — have proved more resilient than expected. Putin\'s strategic bet is that Western will fractures before Russian endurance does.' },

  // ── CHINA ───────────────────────────────────────────────────────────
  { id: 'cn1', name: 'Mao Zedong',   short: 'Mao',       role: 'PRC Chairman',  country: 'china', years: [1949, 1976],
    detail: 'Mao unified China after a century of humiliation (1949) but his subsequent campaigns — the Great Leap Forward (1958-62, 15-55M dead from famine) and Cultural Revolution (1966-76) — caused catastrophic self-inflicted damage. His strategic genius in splitting from the USSR and playing the US against Russia (Nixon visit, 1972) was real, as was his ruthlessness. His death in 1976 freed Deng Xiaoping to reverse course and begin China\'s actual rise.' },

  { id: 'cn2', name: 'Hua Guofeng',  short: 'Hua',       role: 'PRC Chairman',  country: 'china', years: [1976, 1978],
    detail: 'Hua Guofeng briefly succeeded Mao, arresting the "Gang of Four" (including Mao\'s widow) and ending the Cultural Revolution\'s worst excesses. His "Two Whatevers" policy (whatever Mao said, whatever Mao decided) was quickly superseded by Deng Xiaoping\'s pragmatism. Hua represents the transitional moment between Maoist ideology and the market reforms that followed — important for what he stopped rather than what he started.' },

  { id: 'cn3', name: 'Deng Xiaoping', short: 'Deng',     role: 'PRC Paramount Leader', country: 'china', years: [1978, 1992],
    detail: 'Deng\'s "reform and opening" unleashed the most rapid economic growth in human history. His pragmatism ("it doesn\'t matter if a cat is black or white, so long as it catches mice") replaced Maoist ideology with market mechanisms while maintaining party political control. Special Economic Zones, foreign investment liberalization, and agricultural privatization lifted ~800 million from poverty. He authorized the Tiananmen massacre (1989) to preserve political stability — his defining moral failure.' },

  { id: 'cn4', name: 'Jiang Zemin',  short: 'Jiang',     role: 'PRC President', country: 'china', years: [1993, 2003],
    detail: 'Jiang navigated China through the sensitive post-Tiananmen period, presiding over explosive economic growth while suppressing political dissent (Falun Gong crackdown). He secured China\'s WTO membership (2001) — the single most consequential trade event of his era. His "Three Represents" theory expanded party legitimacy beyond workers to include entrepreneurs, beginning the party\'s evolution from class-based to nationalist legitimacy.' },

  { id: 'cn5', name: 'Hu Jintao',    short: 'Hu',        role: 'PRC President', country: 'china', years: [2003, 2013],
    detail: 'Hu\'s decade saw China become the world\'s second-largest economy, surpassing Japan in 2010. His "harmonious society" rhetoric masked rising inequality and a massive stimulus response to the 2008 financial crisis ($586B) that entrenched state-enterprise dominance and debt-driven growth. He oversaw the Beijing Olympics (2008), projecting China\'s arrival as a global power, while keeping a notably lower international profile than his successor would.' },

  { id: 'cn6', name: 'Xi Jinping',   short: 'Xi',        role: 'PRC President', country: 'china', years: [2013, 2026],
    detail: 'Xi has concentrated more power than any Chinese leader since Mao, abolishing term limits (2018) and conducting sweeping anti-corruption campaigns that consolidated his personal authority. His "China Dream" nationalism, BRI infrastructure projection, military modernization (especially naval), South China Sea island-building, and economic coercion of dissenting neighbors represent the most significant revisionist challenge to the post-war order. The Taiwan question — will he attempt reunification by force? — is the most consequential strategic uncertainty of the 21st century.' },

  // ── UNITED KINGDOM ──────────────────────────────────────────────────
  { id: 'uk1', name: 'Attlee',        short: 'Attlee',    role: 'UK Prime Minister', country: 'uk', years: [1945, 1951],
    detail: 'Clement Attlee\'s Labour government created the British welfare state: the NHS, national insurance, and nationalization of key industries — all while managing post-war austerity and continued bread rationing. He navigated Indian independence (1947), the creation of Pakistan, and NATO founding, while presiding over British decolonization. His government arguably did more structural change to British society than any other 20th-century administration.' },

  { id: 'uk2', name: 'Churchill',     short: 'Churchill', role: 'UK Prime Minister', country: 'uk', years: [1951, 1955],
    detail: 'Churchill\'s second premiership (1951-55) was a twilight administration — he was 76 when he returned to power, increasingly infirm, and suffered a major stroke in 1953 that was hidden from the public. His foreign policy focused on maintaining Britain\'s great-power status through the "Special Relationship" with the US and the Commonwealth. He coined the term "Iron Curtain" in his famous 1946 Fulton speech, which set the Cold War intellectual framework.' },

  { id: 'uk3', name: 'Eden',          short: 'Eden',      role: 'UK Prime Minister', country: 'uk', years: [1955, 1957],
    detail: 'Anthony Eden\'s premiership is defined by the Suez Crisis (1956) — his decision to use military force to retake the Suez Canal after Nasser\'s nationalization was vetoed by Eisenhower, who threatened to crash the British pound. The resulting humiliation marked the definitive end of Britain as an independent great power. Eden resigned in January 1957 in broken health. Suez remains the clearest marker of Britain\'s transition from empire to American-dependent middle power.' },

  { id: 'uk4', name: 'Macmillan',     short: 'Macmillan', role: 'UK Prime Minister', country: 'uk', years: [1957, 1963],
    detail: 'Harold Macmillan rebuilt British confidence after the Suez debacle and presided over the "you\'ve never had it so good" consumer boom. His "Wind of Change" speech (1960) acknowledged African decolonization as irreversible. He maintained the Special Relationship with the US while beginning Britain\'s long, unsuccessful courtship of the EEC (de Gaulle vetoed UK membership twice). His government ended in the Profumo scandal — a Cold War espionage-meets-tabloid affair.' },

  { id: 'uk5', name: 'Douglas-Home',  short: 'D-Home',    role: 'UK Prime Minister', country: 'uk', years: [1963, 1964],
    detail: 'Alec Douglas-Home served for just over a year, taking over from Macmillan mid-term and losing the 1964 election to Harold Wilson. A Scottish aristocrat and former Foreign Secretary, he is historically interesting mainly as the last Prime Minister from the House of Lords (he renounced his earldom to serve in Commons). His brief tenure bridged the Conservative patrician era to the more technocratic Wilson years.' },

  { id: 'uk6', name: 'Wilson',        short: 'Wilson',    role: 'UK Prime Minister', country: 'uk', years: [1964, 1970],
    detail: 'Harold Wilson\'s first government navigated a severe sterling crisis (eventually devaluing in 1967), the "white heat of technology" modernization agenda, and the fraught question of Britain\'s relationship with Europe. He resisted US pressure to send troops to Vietnam — perhaps his most consequential decision. Facing a balance of payments crisis, he devalued the pound in 1967 ("the pound in your pocket" speech became one of British politics\' most memorable PR disasters).' },

  { id: 'uk7', name: 'Heath',         short: 'Heath',     role: 'UK Prime Minister', country: 'uk', years: [1970, 1974],
    detail: 'Edward Heath\'s central achievement was taking Britain into the European Economic Community (1973) — fulfilling a goal that had eluded Macmillan. He faced the 1973 oil crisis and the associated miners\' strike, implementing a three-day working week to conserve energy. His confrontational industrial relations policy ultimately failed when he called an election asking "who governs Britain?" and narrowly lost — one of the most consequential misjudgments in post-war British political history.' },

  { id: 'uk8', name: 'Wilson',        short: 'Wilson',    role: 'UK Prime Minister', country: 'uk', years: [1974, 1976],
    detail: 'Wilson returned for a second stint governing a deeply divided Britain: rampant inflation (peaking at 25%), IRA bombings on the mainland, and a renegotiated EEC membership confirmed by the 1975 referendum (67% voted to stay). He resigned suddenly in 1976, citing exhaustion — he was later revealed to have been in early stages of Alzheimer\'s. His governments held Britain together through its most economically turbulent post-war decade without the breakdown that several commentators feared.' },

  { id: 'uk9', name: 'Callaghan',     short: 'Callaghan', role: 'UK Prime Minister', country: 'uk', years: [1976, 1979],
    detail: 'James Callaghan\'s government lurched from crisis to crisis: the 1976 IMF bailout (humiliating for a G7 nation), the "Winter of Discontent" (1978-79, widespread public sector strikes, garbage uncollected, bodies unburied), and the resulting collapse of Labour\'s parliamentary majority. His rhetorical question "Crisis? What crisis?" — though slightly misquoted — captured the public perception of government paralysis. He lost the resulting 1979 election to Margaret Thatcher.' },

  { id: 'uk10', name: 'Thatcher',     short: 'Thatcher',  role: 'UK Prime Minister', country: 'uk', years: [1979, 1990],
    detail: 'Thatcher\'s 11 years reshaped British society as profoundly as Attlee\'s had in the opposite direction: monetarism to break inflation (unemployment hit 3.3M), privatization of state industries, crushing the miners\' strike (1984-85), and the Big Bang financial deregulation (1986) that transformed London into a global financial center. The Falklands War (1982) restored British military confidence and her political fortunes. She remains the defining polarizing figure in post-war British politics.' },

  { id: 'uk11', name: 'Major',        short: 'Major',     role: 'UK Prime Minister', country: 'uk', years: [1990, 1997],
    detail: 'John Major succeeded Thatcher after her own party ousted her over the poll tax and European policy. He led Britain through the 1990-91 Gulf War and signed the Maastricht Treaty (1992) — but then watched Britain\'s humiliating ejection from the ERM on "Black Wednesday" (Sep 16, 1992), costing £3.3B. He negotiated the Good Friday Agreement framework and left office with Britain economically recovering but his party exhausted after 18 years in power.' },

  { id: 'uk12', name: 'Blair',        short: 'Blair',     role: 'UK Prime Minister', country: 'uk', years: [1997, 2007],
    detail: 'Tony Blair won in a landslide and delivered the Good Friday Agreement (1998), Scottish and Welsh devolution, and a decade of economic growth. But his decision to join the US invasion of Iraq (2003) — despite mass public opposition — became his defining legacy, damaging his credibility and Labour\'s. His "Third Way" politics tried to reconcile social democracy with market economics; critics say it abandoned Labour\'s redistributive mission; supporters say it won three consecutive elections.' },

  { id: 'uk13', name: 'Brown',        short: 'Brown',     role: 'UK Prime Minister', country: 'uk', years: [2007, 2010],
    detail: 'Gordon Brown had waited over a decade to succeed Blair and inherited the 2008 Global Financial Crisis almost immediately. His decisive response — recapitalizing UK banks, coordinating G20 stimulus — was widely credited with preventing a full depression. But his domestic political positioning never recovered from not calling an election when he first took over in 2007, and he lost to Cameron in 2010. His economic legacy remains genuinely complex: crisis manager who created pre-crisis vulnerabilities.' },

  { id: 'uk14', name: 'Cameron',      short: 'Cameron',   role: 'UK Prime Minister', country: 'uk', years: [2010, 2016],
    detail: 'David Cameron led a Conservative-Liberal Democrat coalition through austerity, then a Conservative majority government. His decision to hold the 2016 Brexit referendum — intended to settle the Conservative Party\'s European question — instead ended his career and destabilized British politics for a decade. The 52-48 Leave vote was the single most consequential British political decision since WWII, triggering a process still incomplete. He resigned the morning after the result.' },

  { id: 'uk15', name: 'May',          short: 'May',       role: 'UK Prime Minister', country: 'uk', years: [2016, 2019],
    detail: 'Theresa May\'s entire premiership was consumed by Brexit: three failed attempts to pass her Withdrawal Agreement in Parliament, two extensions to Article 50, and the fundamental contradiction of leading a majority Remain cabinet in implementing a Leave result. Her "red lines" (ending free movement, leaving the Single Market and Customs Union) committed Britain to a hard Brexit path. She resigned in tears in 2019 having failed to deliver Brexit but having prevented a no-deal crash-out.' },

  { id: 'uk16', name: 'Johnson',      short: 'Johnson',   role: 'UK Prime Minister', country: 'uk', years: [2019, 2022],
    detail: 'Boris Johnson won a decisive 80-seat majority on "Get Brexit Done" and delivered a trade deal with the EU in December 2020. His government\'s COVID response was chaotic in spring 2020 but the vaccine rollout was one of the fastest in the world. He committed significant military support to Ukraine after the 2022 invasion. He was forced out by his own MPs over the "Partygate" scandal — parties at Downing Street during COVID lockdowns he himself had ordered.' },

  { id: 'uk17', name: 'Truss',        short: 'Truss',     role: 'UK Prime Minister', country: 'uk', years: [2022, 2022],
    detail: 'Liz Truss served 45 days — the shortest premiership in British history. Her "mini-budget" (September 2022) promised unfunded tax cuts totalling £45B, triggering a gilt market crisis, a pound sterling collapse, and Bank of England emergency intervention. The episode demonstrated the limits of ideologically-driven fiscal policy in an era of high bond market vigilance. She resigned before she could even be formally questioned in Prime Minister\'s Questions.' },

  { id: 'uk18', name: 'Sunak',        short: 'Sunak',     role: 'UK Prime Minister', country: 'uk', years: [2022, 2024],
    detail: 'Rishi Sunak, Britain\'s first Prime Minister of Asian heritage, took over to stabilize markets after the Truss debacle. His government managed inflation (which peaked at 11.1%) back down through aggressive Bank of England rate rises at the cost of a mortgage crisis. He held the Conservatives together through a difficult period but lost the 2024 election heavily to Labour — the Conservatives\' worst result since 1832.' },

  { id: 'uk19', name: 'Starmer',      short: 'Starmer',   role: 'UK Prime Minister', country: 'uk', years: [2024, 2026],
    detail: 'Keir Starmer won the July 2024 election with a commanding parliamentary majority (411 seats) but only 34% of the vote — reflecting the collapse of the Conservative vote across multiple parties. His early months focused on fiscal inheritance ("black hole" in public finances), resetting the UK-EU relationship, and managing Ukraine policy. His government represents Labour\'s first majority since Blair — watched closely to see whether it can reunite a fragmented political landscape.' },

  // ── GERMANY ─────────────────────────────────────────────────────────
  { id: 'de1', name: 'Adenauer',      short: 'Adenauer',  role: 'Chancellor', country: 'germany', years: [1949, 1963],
    detail: 'Konrad Adenauer founded and shaped the Federal Republic of Germany, anchoring it firmly in the West (NATO, EEC) and pursuing economic reconstruction under Ludwig Erhard\'s "social market economy." The Wirtschaftswunder (economic miracle) rebuilt West Germany from rubble to the world\'s third-largest economy by the 1960s. His insistence on European integration — including historic Franco-German reconciliation (Élysée Treaty, 1963) — created the institutional foundation for what became the EU.' },

  { id: 'de2', name: 'Erhard',        short: 'Erhard',    role: 'Chancellor', country: 'germany', years: [1963, 1966],
    detail: 'Ludwig Erhard, the architect of the social market economy as Economics Minister under Adenauer, became Chancellor but struggled in the role. His resistance to Keynesian stimulus during a mild 1966 recession and deteriorating relations with Adenauer\'s CDU faction led to his resignation. He remains more historically important for his economics ministry work (1949-63) than his chancellorship, having designed the framework that produced the German economic miracle.' },

  { id: 'de3', name: 'Kiesinger',     short: 'Kiesinger', role: 'Chancellor', country: 'germany', years: [1966, 1969],
    detail: 'Kurt Georg Kiesinger led the Grand Coalition of CDU/CSU and SPD — the two major parties governing together — through the student protest movements of 1968 and an economic recession. His chancellorship is historically awkward: he had been a Nazi party member (though not in a leadership role), which was publicly confronted when activist Beate Klarsfeld slapped him at a CDU conference. The coalition opened the political space for Brandt\'s Ostpolitik by including the SPD in government.' },

  { id: 'de4', name: 'Brandt',        short: 'Brandt',    role: 'Chancellor', country: 'germany', years: [1969, 1974],
    detail: 'Willy Brandt\'s Ostpolitik — normalizing relations with East Germany, Poland, and the USSR — was one of the most significant strategic reorientations in Cold War Europe. His Kniefall in Warsaw (1970), kneeling spontaneously at the memorial to the Warsaw Ghetto Uprising, became one of the most powerful images of post-war German contrition. He resigned in 1974 when his aide Günter Guillaume was exposed as an East German spy. Nobel Peace Prize 1971.' },

  { id: 'de5', name: 'Schmidt',       short: 'Schmidt',   role: 'Chancellor', country: 'germany', years: [1974, 1982],
    detail: 'Helmut Schmidt governed through the oil crises of the 1970s, NATO\'s dual-track decision (deploying US missiles in Europe while negotiating with the Soviets), and the "German Autumn" of 1977 (RAF terrorism, the Mogadishu hijacking). A pragmatic technocrat, he co-founded the G7 and the European Monetary System. He was deposed in a constructive vote of no-confidence by Helmut Kohl in 1982 — the only Chancellor to leave office this way.' },

  { id: 'de6', name: 'Kohl',          short: 'Kohl',      role: 'Chancellor', country: 'germany', years: [1982, 1998],
    detail: 'Kohl\'s 16 years are defined by a single event: German reunification (1990). When the Berlin Wall fell, he seized the moment with extraordinary energy and diplomatic skill, securing American support (Bush 41), reassuring a nervous France (offering the euro), and completing reunification within a year. The costs — transferring $1.5T to the East, absorbing 16M people into the West German system — proved greater than projected, but the achievement was historic. He left under a CDU fundraising scandal.' },

  { id: 'de7', name: 'Schröder',      short: 'Schröder',  role: 'Chancellor', country: 'germany', years: [1998, 2005],
    detail: 'Gerhard Schröder\'s Social Democrat government passed the Hartz IV labor market reforms — reducing unemployment benefits and making firing easier — that underwrote Germany\'s export competitiveness through the 2000s but hollowed out the middle class. He refused to join the Iraq War (2003) despite US pressure, straining the transatlantic relationship. His post-chancellorship career — taking a board seat with Nord Stream 2 — remains one of the most controversial transitions in German political history.' },

  { id: 'de8', name: 'Merkel',        short: 'Merkel',    role: 'Chancellor', country: 'germany', years: [2005, 2021],
    detail: 'Merkel governed Germany for 16 years through the financial crisis, the Eurozone debt crisis, the refugee crisis (1M Syrian refugees admitted in 2015), and COVID. Her scientific background (PhD in quantum chemistry) shaped an unusually evidence-based governance style. Her strategic error — deepening German energy dependency on Russian gas (Nord Stream 2) despite US warnings — has been widely criticized since 2022. Germany\'s Zeitenwende (strategic turning point) after Ukraine reveals the weight of her legacy.' },

  { id: 'de9', name: 'Scholz',        short: 'Scholz',    role: 'Chancellor', country: 'germany', years: [2021, 2025],
    detail: 'Olaf Scholz\'s chancellorship was defined by the Ukraine shock: his Zeitenwende speech (Feb 27, 2022) pledged €100B for defense modernization and reversed Germany\'s longstanding arms export restrictions. But his coalition (SPD, Greens, FDP) collapsed in November 2024 over budget disputes, triggering snap elections. His government\'s hesitations on weapons deliveries to Ukraine and ambiguous China policy frustrated allies throughout his term.' },

  { id: 'de10', name: 'Merz',         short: 'Merz',      role: 'Chancellor', country: 'germany', years: [2025, 2026],
    detail: 'Friedrich Merz took office in 2025 leading a CDU/CSU-SPD coalition after the AfD\'s strong second-place finish raised alarm across Europe. His early focus: restoring German competitiveness (energy costs, regulation), renegotiating the EU-level migration framework, and managing the Ukraine war\'s political fallout domestically. His chancellorship represents Germany\'s most rightward governing coalition since the post-war era — a reflection of economic anxiety and migration politics reshaping European politics broadly.' },

  // ── KEY FIGURES (non-heads of state — list only) ────────────────────
  { id: 'oth1', name: 'George Marshall',   role: 'US Sec. of State / Sec. of Defense', years: [1947, 1951],
    detail: 'Marshall\'s combination of military genius (architect of Allied victory in WWII) and diplomatic vision (Marshall Plan) is without parallel in American history. The Marshall Plan ($13B) was not charity but strategy: rebuild European markets, prevent communist electoral victories in France and Italy, and create US export markets. Eisenhower said Marshall was the greatest man he ever knew.' },

  { id: 'oth2', name: 'Dean Acheson',      role: 'US Sec. of State', years: [1949, 1953],
    detail: 'Acheson was the principal architect of containment policy. He helped create NATO, guided Korean War policy, and shaped the diplomatic framework of the Cold War. His memoir "Present at the Creation" remains the best insider account of the post-war order\'s construction. His clarity about American interests made him the quintessential realist statesman.' },

  { id: 'oth3', name: 'Henry Kissinger',   role: 'US NSA / Sec. of State', years: [1969, 1977],
    detail: 'Kissinger\'s realpolitik produced the China opening, détente with the USSR, the Vietnam peace agreement, and the petrodollar system — while enabling the Pinochet coup in Chile and Indonesian massacres. His framework: stability over democracy, great-power management over multilateral rules. Loved and loathed in equal measure, his structural impact on US foreign policy lasted well beyond his tenure.' },
];

// ── EVENTS ──────────────────────────────────────────────────────────────
export const EVENTS = [
  { id: 'e1', year: 1944, type: 'trade', title: 'Bretton Woods Conference', era: 'postwar',
    detail: 'The Bretton Woods Conference established the post-war international monetary order, pegging 44 nations\' currencies to the USD and creating the IMF and World Bank. The dollar became the world\'s reserve currency, underwritten by the promise of gold convertibility at $35/oz. This gave the United States unprecedented structural power over global trade financing for the next 27 years. The British delegation, led by Keynes, pushed for a neutral international currency (bancor) but lost — setting the stage for the "exorbitant privilege" debate that continues today.' },
  { id: 'e2', year: 1945, type: 'conflict', title: 'Hiroshima & Nagasaki / V-J Day', era: 'postwar',
    detail: 'The atomic bombings of Hiroshima (Aug 6) and Nagasaki (Aug 9) ended the Pacific War with Japan\'s surrender on Aug 15. The decision revealed that the United States had achieved a decisive technological supremacy that would define great-power deterrence for the entire Cold War era. The "nuclear umbrella" became America\'s core security export to allies — fundamentally reshaping the calculus of trade, alliance, and territorial conflict globally.' },
  { id: 'e3', year: 1947, type: 'trade', title: 'GATT & Marshall Plan', era: 'postwar',
    detail: 'The General Agreement on Tariffs and Trade (GATT) established multilateral trade rules for 23 nations, beginning a 50-year liberalization process. Simultaneously, the Marshall Plan ($13.3B ≈ $150B today) rebuilt Western Europe — but critically, it was designed to create export markets for American goods and foreclose Soviet expansion. Aid recipients were required to buy American products, cementing the dollar\'s centrality. Together, GATT and Marshall created an interlocking web: security guarantees for market access.' },
  { id: 'e4', year: 1947, type: 'conflict', title: 'Truman Doctrine / Containment', era: 'postwar',
    detail: 'President Truman\'s address to Congress on March 12, 1947 committed the United States to "support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures" — initially Greece and Turkey. George Kennan\'s "Long Telegram" and subsequent "X Article" had laid the strategic framework: contain Soviet expansion without direct confrontation. This doctrine structured American foreign policy for 44 years and justified interventions on every inhabited continent.' },
  { id: 'e5', year: 1949, type: 'conflict', title: 'NATO Founded / Soviet A-Bomb', era: 'postwar',
    detail: 'NATO (April 1949) formalized the US security guarantee to Western Europe — an unprecedented peacetime collective defense pact. Five months later, the Soviet Union detonated its first nuclear device (Joe-1), shattering the American monopoly. The combination accelerated an arms race, made Europe permanently divided, and forced both superpowers into a logic of proxy conflicts rather than direct war.' },
  { id: 'e6', year: 1950, type: 'conflict', title: 'Korean War Begins', era: 'postwar',
    detail: 'North Korea\'s June 25, 1950 invasion of South Korea tested whether the Truman Doctrine had teeth. The UN authorized a US-led intervention. China\'s entry in October transformed the conflict, killing ~36,000 Americans and ~180,000 Chinese. The armistice (1953) left the peninsula divided at the 38th parallel — exactly where it started. Korea cemented the US commitment to forward military basing in Asia.' },
  { id: 'e7', year: 1955, type: 'trade', title: 'Bandung Conference', era: 'postwar',
    detail: 'Twenty-nine African and Asian nations met in Bandung, Indonesia to assert a "Third Way" outside Cold War blocs. Led by Nehru, Nasser, Sukarno, and Zhou Enlai, the conference birthed the Non-Aligned Movement and challenged the binary of US-Soviet competition. Economically, it foreshadowed demands for commodity price stability and development finance — themes that would resurface in the 1970s\' New International Economic Order proposals.' },
  { id: 'e8', year: 1956, type: 'conflict', title: 'Suez Crisis', era: 'coldwar',
    detail: 'Egypt\'s Nasser nationalized the Suez Canal in July 1956, triggering a secret Anglo-French-Israeli military operation. Eisenhower\'s furious opposition — he threatened to crash the British pound if they didn\'t withdraw — marked the definitive end of British imperial power. The episode also pushed Egypt toward the Soviet sphere. Control of shipping chokepoints (Suez, Hormuz, Malacca) has defined trade-security interaction ever since.' },
  { id: 'e9', year: 1957, type: 'trade', title: 'Treaty of Rome / EEC', era: 'coldwar',
    detail: 'The Treaty of Rome created the European Economic Community, beginning Western Europe\'s long march toward economic integration. The initial six (France, West Germany, Italy, Benelux) eliminated internal tariffs and created a common external tariff. For the US, the EEC was simultaneously welcome (prosperous allies are stable allies) and threatening (a rival trade bloc). The EEC/EU\'s evolution from free trade zone to political union is one of the defining institutional experiments of the post-war era.' },
  { id: 'e10', year: 1961, type: 'conflict', title: 'Bay of Pigs / Berlin Wall', era: 'coldwar',
    detail: 'Two defining Cold War failures in 1961: the CIA-backed Cuban exile invasion collapsed in April, humiliating Kennedy and cementing Castro\'s alignment with the USSR. In August, East Germany built the Berlin Wall — the most literal symbol of the Iron Curtain. The wall prevented the hemorrhage of East German skilled workers (3M had fled West since 1945) but became the defining image of communist failure.' },
  { id: 'e11', year: 1962, type: 'conflict', title: 'Cuban Missile Crisis', era: 'coldwar',
    detail: '13 days in October 1962 brought the world closest to nuclear war. Soviet placement of missiles in Cuba triggered a naval blockade and back-channel negotiation. The resolution — Soviets remove Cuban missiles, US pledges no invasion of Cuba and quietly removes Turkish missiles — established the informal rules of nuclear crisis management. The crisis paradoxically stabilized Cold War competition by showing both sides the unacceptable cost of escalation.' },
  { id: 'e12', year: 1965, type: 'conflict', title: 'Vietnam Escalation', era: 'coldwar',
    detail: 'President Johnson\'s decision to deploy 500,000+ US troops to Vietnam after the Gulf of Tonkin resolution was the pivotal commitment of the Cold War era. The war\'s economic cost ($738B in 2020 dollars) contributed directly to the collapse of the Bretton Woods gold standard as LBJ refused to raise taxes to fund both the Great Society and the war. The military failure destroyed confidence in American strategic judgment.' },
  { id: 'e13', year: 1971, type: 'trade', title: 'Nixon Ends Gold Standard', era: 'coldwar',
    detail: 'On August 15, 1971, Nixon unilaterally ended the Bretton Woods system by suspending dollar-gold convertibility. Facing a run on US gold reserves (foreign governments, especially France under de Gaulle, were converting dollars to gold), Nixon chose to preserve policy autonomy over international monetary order. The resulting "Nixon Shock" moved the world to floating exchange rates and redefined the dollar\'s role: now backed not by gold but by US military power and oil pricing — the petrodollar system.' },
  { id: 'e14', year: 1972, type: 'conflict', title: 'Nixon Opens China', era: 'detente',
    detail: 'Nixon\'s February 1972 visit to China — unimaginable four years earlier — exploited the Sino-Soviet split to triangulate US strategic advantage. The Shanghai Communiqué acknowledged Taiwan\'s ambiguous status without forcing a crisis. The opening had cascading effects: China eventually entered global supply chains, the USSR faced a two-front strategic problem, and Taiwan became the world\'s most dangerous potential flashpoint.' },
  { id: 'e15', year: 1973, type: 'trade', title: 'OPEC Oil Embargo', era: 'detente',
    detail: 'Arab OPEC members\' October 1973 embargo quadrupled oil prices and revealed the structural vulnerability of oil-dependent Western economies. The US responded by negotiating the petrodollar system: Saudi Arabia would price oil in dollars and recycle petrodollars into US Treasuries; the US would guarantee Saudi security. This bargain entrenched dollar hegemony through commodity pricing and shaped Middle East policy for 50 years.' },
  { id: 'e16', year: 1975, type: 'conflict', title: 'Fall of Saigon', era: 'detente',
    detail: 'North Vietnamese forces captured Saigon on April 30, 1975, completing the communist reunification of Vietnam. The defeat triggered deep introspection: the "Vietnam syndrome" constrained military interventionism for a decade, the War Powers Act reasserted Congressional authority, and the CIA was subjected to the Church Committee hearings. The answer to maintaining deterrence without quagmire came in the form of proxy arming of anti-Soviet forces globally.' },
  { id: 'e17', year: 1978, type: 'trade', title: 'Deng\'s Reform & Opening', era: 'detente',
    detail: 'Deng Xiaoping\'s launch of "reform and opening up" began one of history\'s most dramatic economic transformations. Special Economic Zones, foreign investment liberalization, and agricultural privatization lifted ~800 million from poverty over 40 years. For global trade, it created the world\'s largest manufacturing base. For geopolitics, it created the central challenge of the 21st century: integrating a non-liberal great power into a liberal international order.' },
  { id: 'e18', year: 1979, type: 'conflict', title: 'Iranian Revolution / Afghan War', era: 'detente',
    detail: 'Two 1979 events reshaped the Middle East and Central Asia for generations. The Iranian Revolution replaced the Shah with a Shi\'a theocracy hostile to America. The Soviet invasion of Afghanistan in December launched a CIA/ISI-backed mujahideen insurgency that bled the Red Army for 10 years. The Afghan blowback — jihadist networks, US-armed militants — would mature into al-Qaeda and the post-9/11 era.' },
  { id: 'e19', year: 1980, type: 'trade', title: 'Volcker Shock & Reagan Revolution', era: 'detente',
    detail: 'Fed Chair Volcker\'s decision to raise rates to 20% broke the inflation spiral but caused a brutal recession (unemployment peaked at 10.8%). Reagan\'s supply-side tax cuts, deregulation, and defense buildup restructured the American economy. The combination accelerated the dismantling of industrial unions, kicked off three decades of financialization, and created the large trade deficits that would become the defining tension of the global trading system.' },
  { id: 'e20', year: 1985, type: 'trade', title: 'Plaza Accord', era: 'detente',
    detail: 'The Plaza Accord (September 1985) saw the G5 nations agree to depreciate the dollar vs the yen and deutschmark to correct US trade imbalances. The yen doubled against the dollar within two years, making Japanese exports expensive and triggering Japan\'s asset bubble (Nikkei peaked in 1989 before a 30-year bear market). The Accord showed the limits of coordinated currency management — the cure created its own crises.' },
  { id: 'e21', year: 1989, type: 'conflict', title: 'Berlin Wall Falls / Tiananmen', era: 'detente',
    detail: 'November 9, 1989: the Berlin Wall fell, initiating the collapse of European communist states. June 4, 1989: China\'s PLA crushed pro-democracy protesters in Tiananmen Square. The divergence is crucial — the USSR allowed political liberalization that led to its dissolution; China suppressed it and maintained party control over a market economy. These two events define the central question of the next 35 years: can authoritarian capitalism succeed long-term?' },
  { id: 'e22', year: 1991, type: 'conflict', title: 'Gulf War / USSR Dissolves', era: 'unipolar',
    detail: 'The Gulf War (Jan-Feb 1991) showcased overwhelming US conventional military dominance — 100 hours of ground combat after 6 weeks of air war expelled Iraq from Kuwait. Then in December 1991, the Soviet Union formally dissolved, leaving the United States as the sole superpower. The structural question — what does a unipolar hegemon do? — would be answered problematically over the next 20 years.' },
  { id: 'e23', year: 1994, type: 'trade', title: 'NAFTA & WTO', era: 'unipolar',
    detail: 'NAFTA (January 1, 1994) integrated the US, Canadian, and Mexican economies, accelerating manufacturing migration to Mexico. Then the Uruguay Round created the WTO (January 1995), replacing GATT with a binding dispute resolution mechanism. These two agreements accelerated globalization\'s winners (consumers, multinationals) and losers (manufacturing workers in rich countries) — the political backlash to which arrived 20 years later in the form of Trump and Brexit.' },
  { id: 'e24', year: 1997, type: 'trade', title: 'Asian Financial Crisis', era: 'unipolar',
    detail: 'The 1997-98 Asian Financial Crisis began in Thailand and cascaded to Korea, Indonesia, Malaysia, and Russia. IMF rescue packages came with harsh austerity conditions (the "Washington Consensus"), which enraged recipient governments. The crisis had two lasting effects: Asian nations accumulated massive dollar reserves to avoid future IMF dependency (the origin of China\'s $3T+ reserves), and it discredited Washington Consensus orthodoxy, opening space for China\'s state-directed model.' },
  { id: 'e25', year: 2001, type: 'conflict', title: '9/11 & the War on Terror', era: 'unipolar',
    detail: 'The September 11 attacks killed 2,977 people and triggered the longest wars in American history. The invasion of Afghanistan (Oct 2001) was followed by the invasion of Iraq (Mar 2003) on the false premise of WMD. Total post-9/11 war costs: $8 trillion (Watson Institute). The wars failed to produce stable democracies and generated strategic vacuum that Iran, China, and Russia exploited. The greatest geopolitical gift to China was the 20 years America spent distracted in the Middle East.' },
  { id: 'e26', year: 2001, type: 'trade', title: 'China Joins WTO', era: 'unipolar',
    detail: 'China\'s WTO accession in December 2001 was the pivotal trade event of the 21st century. The "China shock" research documented the loss of 2-2.5 million US manufacturing jobs between 2001-2007. But the macro picture is more complex: China\'s integration reduced consumer goods inflation, funded US deficits by buying Treasuries, and lifted hundreds of millions from poverty. The strategic miscalculation was the belief that WTO membership would lead China toward liberal democracy.' },
  { id: 'e27', year: 2008, type: 'trade', title: 'Global Financial Crisis', era: 'unipolar',
    detail: 'The 2008 Global Financial Crisis, triggered by the collapse of the US mortgage-backed securities market, was the most severe financial shock since 1929. The Federal Reserve\'s emergency response (TARP, QE, near-zero rates) stabilized the system but required unprecedented intervention. China\'s $586B stimulus package helped stabilize global demand. The crisis delegitimized financial deregulation orthodoxy and created the populist soil for Brexit, Trump, and the rise of economic nationalism globally.' },
  { id: 'e28', year: 2013, type: 'trade', title: 'Belt & Road Initiative', era: 'multipolar',
    detail: 'Xi Jinping announced the Belt and Road Initiative in September 2013 — the most ambitious infrastructure investment program in history, eventually touching 150+ countries and $1T+ in lending. BRI is simultaneously economic (creating markets for Chinese goods), strategic (building military-capable ports from Djibouti to Pakistan), and diplomatic (creating debt-leverage relationships). It represents a comprehensive bid for economic and strategic influence projection.' },
  { id: 'e29', year: 2014, type: 'conflict', title: 'Russia Annexes Crimea', era: 'multipolar',
    detail: 'Russia\'s annexation of Crimea in March 2014 marked the end of the post-Cold War European security order. The EU/US response — economic sanctions — showed both the power and limits of financial coercion: Russia\'s economy contracted but did not collapse. The conflict accelerated European defense spending discussions and previewed the full-scale invasion of 2022. It also revealed the central tension: economic interdependence (European gas dependency) as both a weapon and a vulnerability.' },
  { id: 'e30', year: 2016, type: 'conflict', title: 'Brexit & Trump Election', era: 'multipolar',
    detail: 'June 23, 2016: UK votes to leave the EU (52-48). November 8, 2016: Donald Trump wins the US presidency. Both votes expressed the accumulated grievances of globalization\'s losers: deindustrialized regions, cultural anxiety about immigration, and distrust of technocratic elites. Trump\'s "America First" policy attacked the institutional architecture the US had built since 1945 — NATO, WTO, and multilateral agreements — testing whether the liberal order could survive its architect\'s departure.' },
  { id: 'e31', year: 2018, type: 'trade', title: 'US-China Trade War', era: 'multipolar',
    detail: 'Trump\'s imposition of tariffs on $550B of Chinese goods (China retaliated on $185B of US goods) formally launched the US-China economic confrontation. Beyond tariffs, the conflict extended to technology (Huawei blacklisting, semiconductor export controls), investment screening (CFIUS expansion), and supply chain decoupling rhetoric. The Biden administration kept most Trump tariffs — revealing bipartisan consensus that managed interdependence with China was a strategic mistake.' },
  { id: 'e32', year: 2022, type: 'conflict', title: 'Russia Invades Ukraine', era: 'multipolar',
    detail: 'Russia\'s full-scale invasion of Ukraine on February 24, 2022 produced the largest land war in Europe since 1945. The Western response — $175B+ in military/economic aid, unprecedented financial sanctions including central bank asset freezes — tested the weaponization of the dollar-based financial system. The war accelerated European energy independence from Russia, NATO expansion (Finland, Sweden), and revealed the potential limits of financial sanctions as a coercive tool.' },
  { id: 'e33', year: 2023, type: 'trade', title: 'IRA & Chips Act / AI Race', era: 'multipolar',
    detail: 'The US Inflation Reduction Act (2022) and CHIPS and Science Act (2022) represented the largest industrial policy intervention in American history — $369B for clean energy and $52B for semiconductor manufacturing. Combined with export controls on advanced chips to China, these marked a decisive turn from free-market orthodoxy to state-directed industrial competition. The ChatGPT launch (Nov 2022) kicked off an AI race with profound implications for productivity, labor markets, and military competition.' },
];

export const THREADS = [
  { id: 'dollar', title: 'Dollar Hegemony Arc', color: '#c9a050',
    summary: 'The dollar\'s role as global reserve currency — won at Bretton Woods (1944), maintained through the petrodollar deal (1974), and now challenged by sanctions weaponization.',
    events: ['e1', 'e13', 'e15', 'e24', 'e32', 'e33'] },
  { id: 'china', title: 'China\'s Rise', color: '#e07b2a',
    summary: 'From Mao\'s revolution (1949) through Deng\'s market reforms (1978), WTO accession (2001), BRI (2013), and Xi\'s assertive nationalism — the central geopolitical story of the 21st century.',
    events: ['e14', 'e17', 'e21', 'e26', 'e28', 'e31', 'e33'] },
  { id: 'oil', title: 'Oil as Power', color: '#e0bc6e',
    summary: 'From the 1973 embargo through the petrodollar system, Gulf Wars, shale revolution, and the energy transition — how hydrocarbon control has structured military alliances and strategic rivalries.',
    events: ['e13', 'e15', 'e18', 'e22', 'e29', 'e32'] },
  { id: 'afghan', title: 'The Afghan Thread', color: '#8b4513',
    summary: 'The CIA\'s Soviet-era mujahideen arming created al-Qaeda, which drove 9/11, which produced a 20-year war that ended where it started. The clearest case study in strategic blowback in modern history.',
    events: ['e18', 'e25'] },
  { id: 'globalization', title: 'Globalization Arc', color: '#2a5c45',
    summary: 'From GATT (1947) through the WTO/NAFTA era of hyperglobalization (1990s-2000s), to the China shock backlash, Trump tariffs, and COVID supply chain disruptions — the rise and fracture of the free-trade consensus.',
    events: ['e3', 'e9', 'e23', 'e24', 'e26', 'e27', 'e30', 'e31'] },
];

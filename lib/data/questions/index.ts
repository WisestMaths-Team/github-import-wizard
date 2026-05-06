import { Question } from "@/lib/types";

/*
 * ── Year 1 A-Level Maths ──────────────────────────────────────
 *
 * Each topic has its own file inside Year_1_A_Level_Maths/<Subject>/.
 * To add questions: open the file, uncomment the template, fill it in.
 *
 * To add a brand-new topic file:
 *   1. Create the .ts file in the appropriate subfolder
 *   2. Add an import line below
 *   3. Add the spread to the questions array
 */

import { questions as a1 } from "./Year_1_A_Level_Maths/Algebra/a1_expanding_brackets_";
import { questions as a2 } from "./Year_1_A_Level_Maths/Algebra/a2_factorising";
import { questions as a3 } from "./Year_1_A_Level_Maths/Algebra/a3_algebraic_fractions";
import { questions as a4 } from "./Year_1_A_Level_Maths/Algebra/a4_laws_of_indices";
import { questions as a5 } from "./Year_1_A_Level_Maths/Algebra/a5_laws_of_surds";
import { questions as a6 } from "./Year_1_A_Level_Maths/Algebra/a6_rationalising_the_denominator";

import { questions as qc1 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc1_factorising_quadratic";
import { questions as qc2 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc2_quadratic_equation";
import { questions as qc3 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc3_complete_the_square";
import { questions as qc4 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc4_quadratic_involving_function_of_x";
import { questions as qc5 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc5_the_discriminant";
import { questions as qc6 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc6_sketching_quadratic_graphs";
import { questions as qc7 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc7_factorising_cubics";
import { questions as qc8 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc8_the_remainder_theorem";
import { questions as qc9 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc9_the_factor_theorem";
import { questions as qc10 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc10_factorising_a_cubic_(with_no_x_factor)";
import { questions as qc11 } from "./Year_1_A_Level_Maths/Quadratic_and_Cubics/qc11_algebraic_division";

import { questions as be1 } from "./Year_1_A_Level_Maths/Binomial_Expansions/be1_binomial_expansions";

import { questions as cg1 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg1_equations_of_straight_line";
import { questions as cg2 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg2_Line_Segments";
import { questions as cg3 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg3_Parallel_and_Perpendicular_Lines";
import { questions as cg4 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg4_proportion";
import { questions as cg5 } from "./Year_1_A_Level_Maths/Coordinate_Geometry/cg5_curve_sketching";

import { questions as ise1 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise1_Inequalities";
import { questions as ise2 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise2_Simultaneous_Equations_Linear";
import { questions as ise3 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise3_Quadratic_Inequalities";
import { questions as ise4 } from "./Year_1_A_Level_Maths/Inequalities_and_Simltaneous_Equations/ise4_Simultaneous_Equations_Quadratic";

import { questions as t1 } from "./Year_1_A_Level_Maths/Trigonometry/t1_the_sine_and_cosine_rule";
import { questions as t2 } from "./Year_1_A_Level_Maths/Trigonometry/t2_trigonometric_identities";
import { questions as t3 } from "./Year_1_A_Level_Maths/Trigonometry/t3_trigonometric_graphs";
import { questions as t4 } from "./Year_1_A_Level_Maths/Trigonometry/t4_trigonometric_equations";

import { questions as el1 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el1_expontentials";
import { questions as el2 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el2_logarithms";
import { questions as el3 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el3_laws_of_logarithms";
import { questions as el4 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el4_solving_equations";
import { questions as el5 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el5_modelling_exponential_growth_and_decay";
import { questions as el6 } from "./Year_1_A_Level_Maths/Exponentials_and_Logarithms/el6_using_logarithmic_graphs";

import { questions as d1 } from "./Year_1_A_Level_Maths/Differentiation/d1_the_gradient_of_a_curve";
import { questions as d2 } from "./Year_1_A_Level_Maths/Differentiation/d2_differentiating_curves";
import { questions as d3 } from "./Year_1_A_Level_Maths/Differentiation/d3_second_order_derivatives";
import { questions as d4 } from "./Year_1_A_Level_Maths/Differentiation/d4_derivatives_and_graphs";
import { questions as d5 } from "./Year_1_A_Level_Maths/Differentiation/d5_real_life_problems";

import { questions as i1 } from "./Year_1_A_Level_Maths/Integration/i1_indefinite_integration";
import { questions as i2 } from "./Year_1_A_Level_Maths/Integration/i2_definite_integration";

import { questions as v1 } from "./Year_1_A_Level_Maths/Vectors/v1_vectors_introduction";
import { questions as v2 } from "./Year_1_A_Level_Maths/Vectors/v2_calculating_vectors";
import { questions as v3 } from "./Year_1_A_Level_Maths/Vectors/v3_modelling_with_vectors";

import { questions as y1k1 } from "./Year_1_A_Level_Maths/Mechanics/k1_kinematics";
import { questions as y1k2 } from "./Year_1_A_Level_Maths/Mechanics/k2_variable_acceleration";
import { questions as f1 } from "./Year_1_A_Level_Maths/Mechanics/f1_forces_and_motion";
import { questions as f2 } from "./Year_1_A_Level_Maths/Mechanics/f2_connected_particles";

import { questions as s1 } from "./Year_1_A_Level_Maths/Statistics/s1_sampling_and_data_interpretation";
import { questions as s2 } from "./Year_1_A_Level_Maths/Statistics/s2_Representing_Data";
import { questions as s3 } from "./Year_1_A_Level_Maths/Statistics/s3_means_median_mode";
import { questions as s4 } from "./Year_1_A_Level_Maths/Statistics/s4_dispersion_of_data";
import { questions as s5 } from "./Year_1_A_Level_Maths/Statistics/s5_sampling_corrleation";
import { questions as prob1 } from "./Year_1_A_Level_Maths/Statistics/p1_simple_probability";
import { questions as sd1 } from "./Year_1_A_Level_Maths/Statistics/sd1_discrete_random_variables";
import { questions as sd2 } from "./Year_1_A_Level_Maths/Statistics/sd2_binomial_distribution";
import { questions as sd3 } from "./Year_1_A_Level_Maths/Statistics/sd3_cumulative_binomial";
import { questions as sd4 } from "./Year_1_A_Level_Maths/Statistics/sd4_modelling_with_binomial";
import { questions as ht1 } from "./Year_1_A_Level_Maths/Statistics/ht1_hypothesis_test_concepts";
import { questions as ht2 } from "./Year_1_A_Level_Maths/Statistics/ht2_binomial_hypothesis_tests";
import { questions as ht3 } from "./Year_1_A_Level_Maths/Statistics/ht3_critical_regions";

/*
 * ── Year 2 A-Level Maths (Edexcel Pure Year 2) ──────────────────
 * Chapter 1 (Algebraic methods) is split per-subtopic; other chapters
 * are currently one file per chapter and can be split similarly.
 */
import { questions as y2am1 } from "./Year_2_A_Level_Maths/Algebraic_Methods/y2am1_proof_by_contradiction";
import { questions as y2am2 } from "./Year_2_A_Level_Maths/Algebraic_Methods/y2am2_algebraic_fractions";
import { questions as y2am3 } from "./Year_2_A_Level_Maths/Algebraic_Methods/y2am3_partial_fractions";
import { questions as y2am4 } from "./Year_2_A_Level_Maths/Algebraic_Methods/y2am4_repeated_factors";
import { questions as y2am5 } from "./Year_2_A_Level_Maths/Algebraic_Methods/y2am5_algebraic_division";
import { questions as y2fg1 } from "./Year_2_A_Level_Maths/Functions_and_Graphs/y2fg1_modulus_function";
import { questions as y2fg2 } from "./Year_2_A_Level_Maths/Functions_and_Graphs/y2fg2_functions_mappings";
import { questions as y2fg3 } from "./Year_2_A_Level_Maths/Functions_and_Graphs/y2fg3_composite_functions";
import { questions as y2fg4 } from "./Year_2_A_Level_Maths/Functions_and_Graphs/y2fg4_inverse_functions";
import { questions as y2fg5 } from "./Year_2_A_Level_Maths/Functions_and_Graphs/y2fg5_modulus_transformations";
import { questions as y2fg6 } from "./Year_2_A_Level_Maths/Functions_and_Graphs/y2fg6_combining_transformations";
import { questions as y2fg7 } from "./Year_2_A_Level_Maths/Functions_and_Graphs/y2fg7_solving_modulus_problems";
import { questions as y2ss1 } from "./Year_2_A_Level_Maths/Sequences_and_Series/y2ss1_sequences";
import { questions as y2ss2 } from "./Year_2_A_Level_Maths/Sequences_and_Series/y2ss2_arithmetic_sequences_and_series";
import { questions as y2ss3 } from "./Year_2_A_Level_Maths/Sequences_and_Series/y2ss3_geometric_sequences_and_series";
import { questions as y2ss4 } from "./Year_2_A_Level_Maths/Sequences_and_Series/y2ss4_modelling_problems";
import { questions as y2be1 } from "./Year_2_A_Level_Maths/Binomial_Expansion/y2be1_expanding_1_plus_x_n";
import { questions as y2be2 } from "./Year_2_A_Level_Maths/Binomial_Expansion/y2be2_expanding_a_plus_bx_n";
import { questions as y2be3 } from "./Year_2_A_Level_Maths/Binomial_Expansion/y2be3_using_partial_fractions";
import { questions as y2tf1 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf1_arcs_and_sectors";
import { questions as y2tf2 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf2_sec_cosec_cot";
import { questions as y2tf3 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf3_graphs_sec_cosec_cot";
import { questions as y2tf4 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf4_using_sec_cosec_cot";
import { questions as y2tf5 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf5_trig_identities";
import { questions as y2tf6 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf6_small_angle_approximations";
import { questions as y2tf7 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf7_addition_double_angle";
import { questions as y2tf8 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf8_r_formulas_modelling";
import { questions as y2tf9 } from "./Year_2_A_Level_Maths/Trigonometric_Functions/y2tf9_inverse_trig_functions";
import { questions as y2pe1 } from "./Year_2_A_Level_Maths/Parametric_Equations/y2pe1_parametric_equations";
import { questions as y2pe2 } from "./Year_2_A_Level_Maths/Parametric_Equations/y2pe2_using_trig_identities";
import { questions as y2pe3 } from "./Year_2_A_Level_Maths/Parametric_Equations/y2pe3_curve_sketching";
import { questions as y2pe4 } from "./Year_2_A_Level_Maths/Parametric_Equations/y2pe4_points_of_intersection";
import { questions as y2df1 } from "./Year_2_A_Level_Maths/Differentiation/y2df1_diff_sin_cos";
import { questions as y2df2 } from "./Year_2_A_Level_Maths/Differentiation/y2df2_diff_exponentials_logs";
import { questions as y2df3 } from "./Year_2_A_Level_Maths/Differentiation/y2df3_chain_rule";
import { questions as y2df4 } from "./Year_2_A_Level_Maths/Differentiation/y2df4_product_rule";
import { questions as y2df5 } from "./Year_2_A_Level_Maths/Differentiation/y2df5_quotient_rule";
import { questions as y2df6 } from "./Year_2_A_Level_Maths/Differentiation/y2df6_diff_trig_functions";
import { questions as y2df7 } from "./Year_2_A_Level_Maths/Differentiation/y2df7_parametric_diff";
import { questions as y2df8 } from "./Year_2_A_Level_Maths/Differentiation/y2df8_implicit_diff";
import { questions as y2df9 } from "./Year_2_A_Level_Maths/Differentiation/y2df9_second_derivatives";
import { questions as y2df10 } from "./Year_2_A_Level_Maths/Differentiation/y2df10_rates_of_change";
import { questions as y2nm1 } from "./Year_2_A_Level_Maths/Numerical_Methods/y2nm1_locating_roots";
import { questions as y2nm2 } from "./Year_2_A_Level_Maths/Numerical_Methods/y2nm2_iteration";
import { questions as y2nm3 } from "./Year_2_A_Level_Maths/Numerical_Methods/y2nm3_sketching_iterations";
import { questions as y2nm4 } from "./Year_2_A_Level_Maths/Numerical_Methods/y2nm4_newton_raphson";
import { questions as y2nm5 } from "./Year_2_A_Level_Maths/Numerical_Methods/y2nm5_trapezium_rule";
import { questions as y2in1 } from "./Year_2_A_Level_Maths/Integration/y2in1_integrating_standard_functions";
import { questions as y2in2 } from "./Year_2_A_Level_Maths/Integration/y2in2_integrating_f_ax_b";
import { questions as y2in3 } from "./Year_2_A_Level_Maths/Integration/y2in3_using_trig_identities";
import { questions as y2in4 } from "./Year_2_A_Level_Maths/Integration/y2in4_reverse_chain_rule";
import { questions as y2in5 } from "./Year_2_A_Level_Maths/Integration/y2in5_integration_by_substitution";
import { questions as y2in6 } from "./Year_2_A_Level_Maths/Integration/y2in6_integration_by_parts";
import { questions as y2in7 } from "./Year_2_A_Level_Maths/Integration/y2in7_partial_fractions";
import { questions as y2in8 } from "./Year_2_A_Level_Maths/Integration/y2in8_finding_areas";
import { questions as y2in10 } from "./Year_2_A_Level_Maths/Integration/y2in10_solving_differential_equations";
import { questions as y2in11 } from "./Year_2_A_Level_Maths/Integration/y2in11_modelling_with_des";
import { questions as y2v1 } from "./Year_2_A_Level_Maths/Vectors/y2v1_vectors_in_three_dimensions";
import { questions as y2v2 } from "./Year_2_A_Level_Maths/Vectors/y2v2_calulating_vectors_in_three_dimensions";

export const questions: Question[] = [
  ...a1, ...a2, ...a3, ...a4, ...a5, ...a6,
  ...qc1, ...qc2, ...qc3, ...qc4, ...qc5, ...qc6, ...qc7, ...qc8, ...qc9, ...qc10, ...qc11,
  ...be1,
  ...cg1, ...cg2, ...cg3, ...cg4, ...cg5,
  ...ise1, ...ise2, ...ise3, ...ise4,
  ...t1, ...t2, ...t3, ...t4,
  ...el1, ...el2, ...el3, ...el4, ...el5, ...el6,
  ...d1, ...d2, ...d3, ...d4, ...d5,
  ...i1, ...i2,
  ...v1, ...v2, ...v3,
  ...y1k1, ...y1k2, ...f1, ...f2,
  ...s1, ...s2, ...s3, ...s4, ...s5, ...prob1, ...sd1, ...sd2, ...sd3, ...sd4, ...ht1, ...ht2, ...ht3,
  // Year 2
  ...y2am1, ...y2am2, ...y2am3, ...y2am4, ...y2am5,
  ...y2fg1, ...y2fg2, ...y2fg3, ...y2fg4, ...y2fg5, ...y2fg6, ...y2fg7,
  ...y2ss1, ...y2ss2, ...y2ss3, ...y2ss4,
  ...y2be1, ...y2be2, ...y2be3,
  ...y2tf1, ...y2tf2, ...y2tf3, ...y2tf4, ...y2tf5, ...y2tf6, ...y2tf7, ...y2tf8, ...y2tf9,
  ...y2pe1, ...y2pe2, ...y2pe3, ...y2pe4,
  ...y2df1, ...y2df2, ...y2df3, ...y2df4, ...y2df5, ...y2df6, ...y2df7, ...y2df8, ...y2df9, ...y2df10,
  ...y2nm1, ...y2nm2, ...y2nm3, ...y2nm4, ...y2nm5, ...y2in1, ...y2in2, ...y2in3, ...y2in4, ...y2in5, ...y2in6, ...y2in7, ...y2in8, ...y2in10, ...y2in11,
  ...y2v1, ...y2v2,
];

/* Sort by topicRef for consistent ordering */
questions.sort((a, b) => a.topicRef.localeCompare(b.topicRef, undefined, { numeric: true }));

export function getQuestionsByTopicRef(ref: string): Question[] {
  return questions.filter((q) => q.topicRef === ref);
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
